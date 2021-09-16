<template lang="pug">
p-pdf
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import pPdf from '../../components/p-pdf/index.vue'

export default defineComponent({
	name: 'home',
	components: {
		pPdf,
	},
})
</script>
