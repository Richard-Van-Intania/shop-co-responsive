<script setup lang="ts"></script>

<template>
    <div>
        <div class="fixed left-0 top-0 right-0 z-20">
            <TopBanner />
            <div class="block xl:hidden"><TopNavMobile /></div>
            <div class="hidden xl:block"><TopNavDesktop /></div>
        </div>
        <div class="h-[38px]" />
        <div class="h-[72px] block xl:hidden" />
        <div class="h-[120px] hidden xl:block" />
        <slot />
        <BottomFooterMobile />
        <BottomFooterDesktop />
    </div>
</template>

<style scoped></style>
