<script setup lang="ts"></script>

<template>
    <div class="relative">
        <div class="flex justify-end"><NuxtImg src="/images/Group 16.png" /></div>
        <div class="absolute left-0 top-0">
            <div class="flex flex-col px-[120px] pt-20 max-w-[840px]">
                <div class="text-[64px] text-black font-itgb leading-none">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
                <div class="pt-8 text-[16px] font-stv text-blk-op-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                <div class="pt-8 max-w-[320px]"><button type="button" class="bg-black w-full h-14 rounded-full text-[16px] font-stv font-medium text-white cursor-pointer" v-on:click="debugClicked('Shop Now')">Shop Now</button></div>
                <div class="pt-8">
                    <div class="flex gap-8">
                        <HomeStatistics label="International Brands" v-bind:numeral="200" /><VerticalRule /> <HomeStatistics label="High-Quality Products" v-bind:numeral="2000" /><VerticalRule />
                        <HomeStatistics label="Happy Customers" v-bind:numeral="30000" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
