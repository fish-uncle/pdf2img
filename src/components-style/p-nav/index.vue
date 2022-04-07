<template lang="pug">
.p-nav.pos-f
	p-logo(:loading="pdf.loading" title="pdf2img", sub-title="PDF转图片" @on-click="handleClick('/pdf2img')" :active="active==='/pdf2img'")
	//p-logo(title="img2base64", sub-title="图片转base64" @on-click="handleClick('/img2base64')" :active="active==='/img2base64'")
	//p-logo(title="url2code", sub-title="文本转二维码" @on-click="handleClick('/url2code')" :active="active==='/url2code'")
	//p-logo(title="code2url", sub-title="二维码转文本" @on-click="handleClick('/code2url')" :active="active==='/code2url'")
	//p-logo(title="dorring", sub-title="拖拽组件" @on-click="handleOpen('https://dorring.shenzhepei.com')")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import pLogo from '../p-logo/index.vue'
import { useRouter, useRoute } from 'vue-router'
import Pdf from '@/core/Pdf'

export default defineComponent({
	name: 'p-nav',
	components: {
		pLogo,
	},
	props: {
		defaultActive: {
			type: String,
			default: '',
		},
	},
	setup(props) {
		const pdf: Pdf = Pdf.Instance()
		const router = useRouter()
		const route = useRoute()
		const state = reactive({ active: props.defaultActive || '', pdf })
		const handleClick = url => {
			if (route.path !== url) router.push(url)
		}
		const handleOpen = url => {
			window.open(url)
		}
		watch(
			() => route.path,
			() => {
				state.active = route.path
			},
		)
		return {
			...toRefs(state),
			handleClick,
			handleOpen,
		}
	},
})
</script>
<style lang="scss" scoped>
.p-nav {
	padding: 10px 30px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	grid-gap: 24px;
	background-color: #fff;
}
</style>
