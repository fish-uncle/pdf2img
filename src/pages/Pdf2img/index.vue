<template lang="pug">
.fn-flex.flex-row.pdf-content
	p-left
	p-right
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import pLeft from './components/p-left.vue'
import pRight from './components/p-right.vue'

export default defineComponent({
	name: 'pdf2img',
	components: {
		pLeft,
		pRight,
	},
})
</script>
<style lang="scss" scoped>
.pdf-content{
	padding-top: 150px;
}
</style>
