<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
    numeral: { type: Number, required: true },
});
</script>

<template>
    <div class="flex flex-col">
        <div class="font-stv font-bold leading-tight text-[24px] md:text-[32px] xl:text-[40px]">{{ formatNumber(props.numeral) }}+</div>
        <div class="font-stv text-blk-op-60 text-[12px] md:text-[14px] xl:text-[16px]">{{ props.label }}</div>
    </div>
</template>

<style scoped></style>
