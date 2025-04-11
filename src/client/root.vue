<template>
	<main class="main">
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.main {
	flex: 1 1 auto;
}
</style>
