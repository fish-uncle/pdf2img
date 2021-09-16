<template lang="pug">
.p-left-logo-box(@click="handleClick")
	.p-left-logo.pos-r.fn-flex.cursor-pointer(:class="{active}" ) {{title}}
	.p-left-logo-text.cursor-pointer {{subTitle}}
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'p-logo',
	props: {
		title: {
			type: String,
		},
		subTitle: {
			type: String,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['on-click'],
	// @ts-ignore
	setup(props, { emit }) {
		const handleClick = e => {
			emit('on-click', e)
		}
		return { handleClick }
	},
})
</script>
<style lang="scss" scoped>
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
.p-left-logo-text {
	font-size: 15px;
	font-weight: 600;
	color: #786450;
}
.p-left-logo {
	width: 70px;
	height: 70px;
	line-height: 70px;
	justify-content: center;
	color: #786450;
	font-weight: bold;
	margin: 20px 0;

	&:before,
	&:after {
		content: '';
		position: absolute;
		border-width: 1px;
		border-style: solid;
		border-radius: 50%;
		-webkit-transition: all 1.5s ease-in-out;
		transition: all 1.5s ease-in-out;
	}
	&:before {
		width: 76px;
		height: 76px;
		top: -3px;
		left: -3px;
		border-color: #786450 #786450 #786450 transparent;
	}
	&:after {
		width: 82px;
		height: 82px;
		top: -6px;
		left: -6px;
		border-color: #786450 transparent #786450 #786450;
	}
	&:hover {
		&:before {
			animation: infinite rotate 4s;
		}
		&:after {
			animation: infinite rotate 3s;
		}
	}
	&.active {
		&:before {
			border-color: #a0816a #a0816a #a0816a transparent;
			animation: infinite rotate 4s;
		}
		&:after {
			border-color: #a0816a transparent #a0816a #a0816a;
			animation: infinite rotate 3s;
		}
	}
}
</style>
