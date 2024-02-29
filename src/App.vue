<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
	<NavigationBar></NavigationBar>
	<RouterView></RouterView>
</template>

<style lang="scss" scoped></style>
