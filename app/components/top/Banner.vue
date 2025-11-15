<script setup lang="ts"></script>

<template>
    <div class="fixed left-0 top-0 right-0 z-10">
        <div class="relative">
            <div class="bg-black h-[38px] flex justify-center items-center text-white text-[14px] font-stv">
                <div>Sign up and get 20% off to your first order.</div>
                <NuxtLink to="/" class="font-medium underline ml-2">Sign Up Now</NuxtLink>
                <div class="absolute right-[120px] hidden md:block">
                    <button type="button" class="cursor-pointer flex justify-center items-center" @click="debugClicked('closed!!')"><Icon name="ri:close-fill" style="color: white" size="24px" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
