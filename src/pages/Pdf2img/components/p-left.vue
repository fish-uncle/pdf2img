<template lang="pug">
.p-left.fn-flex.flex-column
	.fn-flex.flex-row
		p-button(for="pdf" label="选择文件" :disabled="pdf.loading")
			input.fn-hide#pdf(type="file", accept="application/pdf" @change="importPdf")
		p-button(label="导出图片" :disabled="!pdf.pageNum || pdf.loading" @on-click="downloadPdf")
	.p-left-tip
		p-text(label="文件名" :value="pdf.fileName")
		p-text(label="大小" :value="`${pdf.fileSize}MB`")
		p-text(label="页数" :value="`${pdf.pageNum}页`")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import pText from '../../../components-style/p-text/index.vue'
import pLogo from '../../../components-style/p-logo/index.vue'
import pButton from '../../../components-style/p-button/index.vue'
import Pdf from '../../../core/Pdf'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'p-left',
	components: {
		pText,
		pButton,
		pLogo,
	},
	setup() {
		const pdf: Pdf = Pdf.Instance()
		const state = reactive({ pdf })
		const router = useRouter()
		const handleClick = url => {
			router.push(url)
		}

		const importPdf = e => {
			if (!e.target.value) return
			state.pdf.loadStart(e)
		}

		const downloadPdf = () => {
			state.pdf.download()
		}

		return {
			...toRefs(state),
			handleClick,
			downloadPdf,
			importPdf,
		}
	},
})
</script>
<style lang="scss" scoped>
.p-left {
	width: 250px;
	align-items: center;
	padding: 10px;
}
.p-left-tip {
	margin-top: 20px;
	width: 100%;
}
</style>
