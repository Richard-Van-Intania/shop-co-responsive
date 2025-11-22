<script setup lang="ts">
const props = defineProps({ label: { type: String, required: true } });
</script>

<template>
    <div class="font-stv font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]">{{ props.label }}</div>
</template>

<style scoped></style>
