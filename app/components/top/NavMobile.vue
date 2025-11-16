<script setup lang="ts"></script>

<template>
    <div class="flex items-center px-4 h-[72px] bg-amber-500">
        <button type="button" class="cursor-pointer flex justify-center items-center" @click="debugClicked('closed!!')"><Icon name="ri:menu-line" style="color: black" size="32px" /></button>
        <div class="text-[26px] text-black font-itgb flex-1 pb-1.5 ml-4">SHOP.CO</div>
        <button type="button" class="cursor-pointer flex justify-center items-center ml-4" @click="debugClicked('closed!!')"><Icon name="ri:search-line" style="color: black" size="32px" /></button>
        <button type="button" class="cursor-pointer flex justify-center items-center ml-4" @click="debugClicked('closed!!')"><Icon name="ri:shopping-cart-2-line" style="color: black" size="32px" /></button>
        <button type="button" class="cursor-pointer flex justify-center items-center ml-4" @click="debugClicked('closed!!')"><Icon name="ri:account-circle-line" style="color: black" size="32px" /></button>
    </div>
</template>

<style scoped></style>
