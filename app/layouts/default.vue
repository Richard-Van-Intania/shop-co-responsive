<script setup lang="ts"></script>

<template>
    <div>
        <div class="fixed left-0 top-0 right-0 z-10">
            <TopBanner />
            <div class="block"><TopNavMobile /></div>
            <div class="block"><TopNavDesktop /></div>
        </div>
        <div class="h-[38px]" />
        <div class="h-[72px]" />
        <div class="h-[120px]" />
        <slot />
        <BottomFooter />
    </div>
</template>

<style scoped></style>
