<script setup lang="ts"></script>

<template>
    <div class="relative">
        <div class="h-[150px] bg-white"></div>
        <div class="absolute top-0 left-0 right-0 px-4">
            <div class="h-[300px] bg-black rounded-2xl p-4 flex flex-col justify-around">
                <div class="text-[32px] text-white font-itgb leading-tight">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
                <div class="relative">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        class="h-11 w-full bg-white text-[14px] font-stv rounded-full pl-14 pr-10 focus:outline-none placeholder:text-blk-op-40 placeholder:text-[14px] placeholder:font-stv"
                    />
                    <div class="absolute left-4 top-2.5"><Icon name="ri:mail-add-line" style="color: var(--color-blk-op-40)" size="24px" /></div>
                </div>
                <button type="button" class="bg-white h-11 rounded-full text-[14px] font-stv font-medium cursor-pointer" v-on:click="debugClicked('Subscribe')">Subscribe to Newsletter</button>
            </div>
        </div>
        <div class="h-[846px] bg-search-grey px-4 pt-44 flex flex-col">ss</div>
    </div>
</template>

<style scoped></style>
