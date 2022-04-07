<template lang="pug">
.p-right(v-if="pdf.list.length")
	.p-right-btn.fn-flex.pos-r
		i(:class="{disabled:active===0}" @click="prevPage") ⇦
		.p-right-btn-text.fn-flex
			span {{active+1}}
			span /
			span {{pdf.pageNum}}
		i(:class="{disabled:active===pdf.pageNum-1}" @click="nextPage") ⇨
	.p-right-list.pos-r.fn-flex
		template(v-for="(item,index) in pdf.list")
			img.pos-a(:style="style(item)" :src="item['img']" v-show="active ===index" v-if="item&&item['img']")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Pdf from '../../../core/Pdf'

export default defineComponent({
	name: 'p-right',
	setup() {
		const pdf: Pdf = Pdf.Instance()
		const state = reactive({ pdf, active: 0 })
		const style = item => {
			if (item) {
				if (item.width > item.height) {
					return { width: '100%', height: (item.height / item.width) * 100 + '%' }
				}
				return { width: (item.width / item.height) * 100 + '%', height: '100%' }
			}
			return {}
		}
		const nextPage = () => {
			if (state.active < pdf.pageNum - 1) state.active += 1
		}
		const prevPage = () => {
			if (state.active > 0) state.active -= 1
		}
		return {
			...toRefs(state),
			style,
			nextPage,
			prevPage,
		}
	},
})
</script>
<style lang="scss" scoped>
.p-right {
	flex: 1;
	height: calc(100vh - 150px);
	padding: 20px 80px 80px 80px;
	background-color: #ddd;
}
.p-right-btn {
	height: 40px;
	align-items: center;
	justify-content: center;
	.p-right-btn-text {
		margin: 0 10px;
		min-width: 30px;
		align-items: center;
		justify-content: center;
	}
	i {
		font-style: normal;
		cursor: pointer;
		&.disabled {
			color: #ddd;
			cursor: inherit;
		}
		&:hover {
			font-weight: bold;
		}
	}
}
.p-right-list {
	height: 100%;
	align-items: center;
	justify-content: center;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
