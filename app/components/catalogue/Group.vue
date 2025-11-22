<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
    source: { type: String, required: true },
});

const item = { source: "/items/Frame 32.png", label: "T-Shirt With Tape Details", rating: 4.5, price: 120, discounted: null };
</script>

<template>
    <div class="px-4 xl:px-[120px]">
        <CatalogueGroupBanner v-bind:label="props.label" />
        <CatalogueItem v-bind:item="item" />
        <SharedHorizontalRule />
    </div>
</template>

<style scoped></style>
