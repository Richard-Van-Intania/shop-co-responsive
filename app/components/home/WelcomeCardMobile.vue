<script setup lang="ts"></script>

<template>
    <div class="flex flex-col bg-top-grey">
        <div class="px-4 pt-8 text-[36px] text-black font-itgb leading-none">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
        <div class="px-4 pt-6 text-[14px] font-stv text-blk-op-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
        <div class="px-4 pt-6 max-w-[520px]"><button type="button" class="bg-black w-full h-14 rounded-full text-[16px] font-stv font-medium text-white cursor-pointer" v-on:click="debugClicked('Shop Now')">Shop Now</button></div>
        <div class="px-4 pt-6">
            <div class="flex justify-evenly">
                <HomeStatistics label="International Brands" v-bind:numeral="200" /> <VerticalRule /> <HomeStatistics label="High-Quality Products" v-bind:numeral="2000" /><VerticalRule /><HomeStatistics
                    label="Happy Customers"
                    v-bind:numeral="30000"
                />
            </div>
        </div>
        <div class="relative">
            <div class="flex justify-end"><NuxtImg src="/images/Rectangle 2.png" /></div>
            <div class="absolute top-14 right-8"><NuxtImg src="/images/Vector.png" height="80" /></div>
            <div class="absolute top-48 left-8"><NuxtImg src="/images/Vector.png" height="48" /></div>
        </div>
    </div>
</template>

<style scoped></style>
