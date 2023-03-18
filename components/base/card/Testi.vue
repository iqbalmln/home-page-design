<script setup lang="ts">
type TestiProps = {
  clientSay: string;
  background: string;
}

defineProps<TestiProps>()

</script>

<template>
  <div
    class="h-[564px] w-[380px] flex flex-col justify-end relative rounded-lg"
    :class="background === 'blue' ? 'bg-[#049CFB]' : background === 'purple' ? 'bg-[#5449D6]' : background === 'green' ? 'bg-[#00DE9C]' : ''">
    <p class="absolute top-0 left-0 p-6 font-bold text-white text-2xl quicksand">{{ clientSay }}</p>
    <figure class="relative">
      <slot />
    </figure>
  </div>
</template>
