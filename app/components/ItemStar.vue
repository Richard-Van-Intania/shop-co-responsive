<script setup lang="ts">
const props = defineProps({ filled: { type: Boolean, required: true } });
</script>
<template>
    <div class="flex justify-center items-center">
        <Icon v-bind:name="props.filled ? 'ri:star-fill' : 'ri:star-half-fill'" style="color: #ffc633" class="text-base md:text-lg xl:text-xl" />
    </div>
</template>
