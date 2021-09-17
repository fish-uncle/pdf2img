<template lang="pug">
.home-list
	p-logo(title="PDF", sub-title="PDF转图片" @on-click="handleClick('/pdf')")
	p-logo(title="dorring", sub-title="拖拽组件" @on-click="handleOpen('https://dorring.shenzhepei.com')")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import pLogo from '../../components-style/p-logo/index.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'p-left',
	components: {
		pLogo,
	},
	setup() {
		const router = useRouter()
		const handleClick = url => {
			router.push(url)
		}
		const handleOpen = url => {
			window.open(url)
		}
		return {
			handleClick,
			handleOpen,
		}
	},
})
</script>
<style lang="scss" scoped>
.home-list {
	padding: 30px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	grid-gap: 24px;
}
</style>
