<script setup lang="ts"></script>

<template>
    <div class="block xl:hidden"><HomeWelcomeCardMobile /></div>
    <div class="hidden xl:block"><HomeWelcomeCardDesktop /></div>
    <HomeBrandsBanner />
    <CatalogueGroup label="NEW ARRIVALS" source="/api/new-arrivals" />
    <CatalogueGroup label="TOP SELLING" source="/api/top-selling" />
    <div class="h-10 bg-green-100 sm:bg-green-300 md:bg-green-500 lg:bg-green-700 xl:bg-green-900"></div>
</template>

<style scoped></style>
