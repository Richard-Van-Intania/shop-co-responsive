<script setup lang="ts">
const props = defineProps({ item: { type: Object as PropType<ItemData>, required: true } });
</script>

<template>
    <div class="flex flex-col gap-1 w-[200px] sm:w-[225px] md:w-[250px] lg:w-[275px] xl:w-[300px]">
        <div class="rounded-3xl object-cover cursor-pointer" v-on:click="debugClicked('closed!!')"><NuxtImg v-bind:src="props.item.source" /></div>
        <CatalogueItemName v-bind:label="props.item.label" />
        <SharedItemRating v-bind:rating="props.item.rating" v-bind:show-score="true" />
        <CatalogueItemPrice v-bind:price="props.item.price" v-bind:discounted="props.item.discounted" />
    </div>
</template>

<style scoped></style>
