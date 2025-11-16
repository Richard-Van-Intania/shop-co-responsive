<script setup lang="ts"></script>

<template>
    <div class="flex items-center px-[120px] h-[120px] bg-white">
        <div class="text-[32px] text-black font-itgb pb-2 mr-16"><NuxtLink to="/">SHOP.CO</NuxtLink></div>
        <button type="button" class="cursor-pointer flex justify-center items-center mr-10" @click="debugClicked('closed!!')">
            <div class="text-[16px] font-stv">Shop</div>
            <div class="pt-2.5"><Icon name="ri:arrow-down-s-line" style="color: black" size="32px" /></div>
        </button>
        <button type="button" class="cursor-pointer text-[16px] font-stv mr-10" @click="debugClicked('closed!!')">On Sale</button>
        <button type="button" class="cursor-pointer text-[16px] font-stv mr-10" @click="debugClicked('closed!!')">New Arrivals</button>
        <button type="button" class="cursor-pointer text-[16px] font-stv" @click="debugClicked('closed!!')">Brands</button>
        <div class="mx-10 flex-1 relative">
            <input
                type="text"
                placeholder="Search for products..."
                class="w-full bg-search-grey text-[16px] font-stv h-12 rounded-full pl-14 pr-10 focus:outline-none placeholder:text-blk-op-40 placeholder:text-[16px] placeholder:font-stv"
            />
            <div class="absolute left-4 top-2.5"><Icon name="ri:search-line" style="color: var(--color-blk-op-40)" size="28px" /></div>
        </div>
        <button type="button" class="cursor-pointer flex justify-center items-center" @click="debugClicked('closed!!')"><Icon name="ri:shopping-cart-2-line" style="color: black" size="32px" /></button>
        <button type="button" class="cursor-pointer flex justify-center items-center ml-4" @click="debugClicked('closed!!')"><Icon name="ri:account-circle-line" style="color: black" size="32px" /></button>
    </div>
</template>

<style scoped></style>
