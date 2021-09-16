<template lang="pug">
.fn-flex.flex-row
	p-left
	p-right
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import pLeft from '../p-left/index.vue'
import pRight from '../p-right/index.vue'

export default defineComponent({
	name: 'p-pdf',
	components: {
		pLeft,
		pRight,
	},
})
</script>
