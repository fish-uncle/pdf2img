<template lang="pug">
.home-list.fn-flex.flex-column.pos-f
	p-logo(title="PDF", sub-title="PDF转图片" @on-click="handleClick('/pdf')")
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
		return {
			handleClick,
		}
	},
})
</script>
<style lang="scss" scoped>
.home-list {
	min-width: 250px;
	align-items: center;
	padding: 10px;
	min-height: 100vh;
}
</style>
