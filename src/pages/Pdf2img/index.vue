<template lang="pug">
p-nav
.fn-flex.flex-row.pdf-content
	p-left
	p-right
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import pLeft from './components/p-left.vue'
import pRight from './components/p-right.vue'
import PNav from '@/components-style/p-nav/index.vue'

export default defineComponent({
	name: 'pdf2img',
	components: {
		pLeft,
		pRight,
		PNav,
	},
})
</script>
<style lang="scss" scoped>
.pdf-content {
	padding-top: 150px;
}
</style>
