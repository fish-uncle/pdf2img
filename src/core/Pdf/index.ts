import Factory from '../Base/factory'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export default class Pdf extends Factory<Pdf> {
	fileName = '' // 文件名
	fileSize = 0 // 文件大小
	pageNum = 0 // 页数
	list: Array<any> = []
	pdf: any = null
	loading = false // 加载状态
	error = false // 报错状态

	clear() {
		this.error = false
		this.pageNum = 0
		this.list = []
	}

	dataURLtoBlob(url) {
		const arr = url.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bStr = atob(arr[1])
		let n = bStr.length
		const u8arr = new Uint8Array(n)
		while (n--) {
			u8arr[n] = bStr.charCodeAt(n)
		}
		return new Blob([u8arr], {
			type: mime,
		})
	}

	download() {
		this.loading = true
		if (this.list.length <= 0) return
		const zip = new JSZip()
		const name = `${+new Date()}`
		const images: any = zip.folder(name)
		this.list.forEach((item, index) => {
			images.file(index + 1 + '.png', this.dataURLtoBlob(item), {
				base64: true,
			})
		})
		zip.generateAsync({
			type: 'blob',
		}).then(content => {
			this.loading = false
			saveAs(content, `${name}.zip`)
		})
	}

	draw(pdf, pageNum) {
		pdf.getPage(pageNum).then(page => {
			const canvas = document.createElement('canvas')
			const context = canvas.getContext('2d')
			const viewport = page.getViewport(2)
			canvas.width = viewport.width
			canvas.height = viewport.height
			const renderContext = {
				canvasContext: context,
				viewport: viewport,
			}
			page.render(renderContext).then(() => {
				this.list[pageNum - 1] = {
					img: canvas.toDataURL('image/png', 1),
					width: viewport.width,
					height: viewport.height,
				}
			})
		})
	}

	loadStart(e) {
		this.clear()
		this.loading = true
		const file = e.target.files[0]
		this.fileSize = Number((file.size / 1048576).toFixed(2))
		console.log(file)
		this.fileName = file.name
		const reader = new FileReader()
		reader.readAsArrayBuffer(file)
		reader.onload = () => {
			const result = new Uint8Array((reader as any).result)
			window.PDFJS.cMapUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/cmaps/'
			window.PDFJS.cMapPacked = true
			window.PDFJS.getDocument(result).then(pdf => {
				if (pdf) {
					this.pdf = pdf
					this.pageNum = pdf.numPages
					this.loadEnd()
					for (let i = 1; i <= this.pageNum; i++) {
						this.draw(pdf, i)
					}
				} else {
					this.loadError()
				}
			})
		}
		reader.onerror = () => {
			this.loadError()
		}
	}

	loadError() {
		this.error = true
		this.loading = false
	}

	loadEnd() {
		this.loading = false
	}
}
