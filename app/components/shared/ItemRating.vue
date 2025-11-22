<script setup lang="ts">
const props = defineProps({ rating: { type: Number, required: true }, showScore: { type: Boolean, required: true } });
</script>

<template>
    <div class="flex items-center gap-px xl:gap-1">
        <SharedItemStar v-bind:filled="props.rating >= 1.0" />
        <SharedItemStar v-if="props.rating > 1.0" v-bind:filled="props.rating >= 2.0" />
        <SharedItemStar v-if="props.rating > 2.0" v-bind:filled="props.rating >= 3.0" />
        <SharedItemStar v-if="props.rating > 3.0" v-bind:filled="props.rating >= 4.0" />
        <SharedItemStar v-if="props.rating > 4.0" v-bind:filled="props.rating >= 5.0" />
        <div v-if="props.showScore" class="pl-1 font-stv text-[12px] md:text-[13px] xl:text-[14px]">
            <span>{{ props.rating }}/</span>
            <span class="text-blk-op-60">5</span>
        </div>
    </div>
</template>

<style scoped></style>
