<template lang="pug">
p-nav
router-view
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PNav from '@/components-style/p-nav/index.vue'
export default defineComponent({
	components: { PNav },
})
</script>
