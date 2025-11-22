<script setup lang="ts">
const props = defineProps({ label: { type: String, required: true } });
</script>

<template>
    <div class="">{{ props.label }}</div>
</template>

<style scoped></style>
