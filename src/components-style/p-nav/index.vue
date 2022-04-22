<template lang="pug">
.p-nav.pos-f
	p-logo(:loading="pdf.loading" title="pdf2img", sub-title="PDF转图片" @on-click="handleClick('/')" :active="active==='/'")
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
	width: 250px;
	background-color: #fff;
}
</style>
