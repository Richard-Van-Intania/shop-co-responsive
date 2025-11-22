<script setup lang="ts">
const props = defineProps({ label: { type: String, required: true } });
</script>

<template>
    <div class="flex justify-center items-center font-itgb text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] pt-10 sm:pt-11 md:pt-12 lg:pt-14 xl:pt-16 pb-7 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14">
        {{ props.label }}
    </div>
</template>

<style scoped></style>
