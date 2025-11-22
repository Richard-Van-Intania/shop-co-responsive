<script setup lang="ts">
const props = defineProps({ price: { type: Number, required: true }, discounted: { type: [Number, null], required: true } });
</script>

<template>
    <div class="flex items-center font-stv">
        <div v-if="props.discounted == null" class="font-bold text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px]">${{ props.price }}</div>
        <div v-else class="flex items-center gap-3">
            <div class="font-bold text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px]">${{ props.discounted }}</div>
            <div class="font-bold text-blk-op-40 line-through decoration-blk-op-40 text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[24px]">${{ props.price }}</div>
            <div class="bg-rd-op-10 text-rd-op-100 font-medium rounded-full py-1 px-3 text-[10px] md:text-[11px] xl:text-[12px]">-{{ (((props.price - props.discounted) / props.price) * 100).toFixed(2) }}%</div>
        </div>
    </div>
</template>

<style scoped></style>
