<template lang="pug">
.p-text.fn-flex.flex-row
	.p-text-label {{  label  }}
	.p-text-value.ellipsis.text-right(:title="value") {{  value  }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'p-text',
	props: {
		label: {
			type: String,
		},
		value: {
			type: String,
		},
	},
})
</script>
<style lang="scss" scoped>
.p-text {
	align-items: center;
	justify-content: center;
	margin: 1px 0;
	padding: 4px 10px;
	width: 100%;
}
.p-text-label {
	font-weight: 600;
	width: 100px;
}
.p-text-value {
	margin-left: auto;
	width: 160px;
}
</style>
