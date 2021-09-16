<template lang="pug">
.p-right
	#imgDiv.p-right-list
		img(v-for="item in pdf.list" :src="item")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Pdf from '../../core/Pdf'

export default defineComponent({
	name: 'p-right',
	setup() {
		const pdf: Pdf = Pdf.Instance()
		const state = reactive({ pdf })
		return {
			...toRefs(state),
		}
	},
})
</script>
<style lang="scss" scoped>
.p-right {
	padding-left: 250px;
	min-height: 100vh;
	flex: 1;
}
.p-right-list {
	padding: 10px;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
