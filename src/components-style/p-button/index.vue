<template lang="pug">
label.p-button.fn-flex.cursor-pointer.circle(:for="$props.for" :label="$props.label" :class="{disabled:disabled}" @click="handleClick" ) {{label}}
slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'p-text',
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		for: {
			type: String,
		},
		label: {
			type: [String, Number],
		},
	},
	emits: ['on-click'],
	setup(props, { emit }) {
		const handleClick = e => {
			if (props.disabled) return
			emit('on-click', e)
		}
		return { handleClick }
	},
})
</script>
<style lang="scss" scoped>
.p-button {
	height: 30px;
	margin: 8px 0;
	border: 1px solid #786450;
	font-size: 12px;
	font-weight: 600;
	transition: all 0.3s ease-in-out;
	color: #786450;
	align-items: center;
	justify-content: center;
	line-height: 30px;
	padding: 0 10px;
	margin-right: 10px;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		background: #786450;
		color: #fff;
	}

	&.disabled {
		background: #ddd;
		border-color: #ddd;
		color: #fff;
		cursor: inherit !important;
	}
}
</style>
