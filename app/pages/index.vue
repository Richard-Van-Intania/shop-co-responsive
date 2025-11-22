<script setup lang="ts">
import ItemName from "~/components/catalogue/ItemName.vue";
</script>

<template>
    <div class="block xl:hidden"><HomeWelcomeCardMobile /></div>
    <div class="hidden xl:block"><HomeWelcomeCardDesktop /></div>
    <HomeBrandsBanner />
    <CatalogueGroup label="NEW ARRIVALS" source="/api/new-arrivals" />
    <CatalogueGroup label="TOP SELLING" source="/api/top-selling" />
    <div class="h-4"></div>
    <CatalogueItemName label="T-Shirt With Tape Details" />
    <ItemRating v-bind:rating="4.9" v-bind:show-score="true" />
    <div class="h-4"></div>
    <div class="h-10 bg-red-300 sm:bg-yellow-300 md:bg-emerald-300 lg:bg-sky-300 xl:bg-violet-300"></div>
    <div class="h-4"></div>
</template>

<style scoped></style>
