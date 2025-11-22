<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
    source: { type: String, required: true },
});

const { data, status } = await useFetch<ItemData[]>(props.source);
</script>

<template>
    <div class="px-4 xl:px-[120px]">
        <CatalogueGroupBanner v-bind:label="props.label" />
        <div v-if="status === 'success'">
            <div class="no-scrollbar flex gap-x-4 gap-y-10 overflow-x-scroll xl:overflow-x-visible flex-nowrap xl:flex-wrap"><CatalogueItem v-for="(item, index) in data" :key="index" v-bind:item="item" /></div>
        </div>
        <div v-else-if="status === 'error'">error</div>
        <div v-else>loading</div>
        <div class="flex justify-center items-center pt-7 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-10 sm:pb-11 md:pb-12 lg:pb-14 xl:pb-16">
            <button type="button" class="bg-white max-w-[400px] w-full h-14 rounded-full text-[16px] font-stv font-medium cursor-pointer border border-blk-op-10" v-on:click="debugClicked('View All')">View All</button>
        </div>
        <SharedHorizontalRule />
    </div>
</template>

<style scoped></style>
