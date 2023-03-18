<script setup lang="ts">
type PhotoProps =  {
  category: string;
  title: string;
}
const props = defineProps<PhotoProps>()
</script>

<template>
  <figcaption class="relative object-cover w-full quicksand">
    <slot />
    <div class="absolute flex flex-col gap-2 bottom-0 left-0 bg-white text-[#5A5A5A] px-6 py-8 w-4/6 rounded-tr-lg">
      <p class="text-sm">{{ category }}</p>
      <p class="text-2xl font-bold">{{ title }}</p>
    </div>
  </figcaption>
</template>
