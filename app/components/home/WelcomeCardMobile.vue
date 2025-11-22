<script setup lang="ts"></script>

<template>
    <div class="flex flex-col bg-top-grey">
        <div class="px-4 pt-8 text-[36px] text-black font-itgb leading-none max-w-[640px]">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
        <div class="px-4 pt-6 text-[14px] font-stv text-blk-op-60 max-w-[640px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
        <div class="px-4 pt-6 max-w-[520px]"><button type="button" class="bg-black w-full h-14 rounded-full text-[16px] font-stv font-medium text-white cursor-pointer" v-on:click="debugClicked('Shop Now')">Shop Now</button></div>
        <div class="px-4 pt-6 max-w-[640px]">
            <div class="flex justify-evenly">
                <HomeStatistics label="International Brands" v-bind:numeral="200" /> <SharedVerticalRule /> <HomeStatistics label="High-Quality Products" v-bind:numeral="2000" /><SharedVerticalRule /><HomeStatistics
                    label="Happy Customers"
                    v-bind:numeral="30000"
                />
            </div>
        </div>
        <div class="flex justify-end"><NuxtImg src="/images/Group 17.png" /></div>
    </div>
</template>

<style scoped></style>
