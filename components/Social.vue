<script setup lang="ts">
</script>

<template>
  <section class="flex flex-col gap-4 px-[120px]">
    <h2 class="font-bold text-[32px] w-3/12 text-[#5a5a5a] quicksand">Rangkaian Proyek Menarik TLab</h2>
    <div class="flex gap-[35px]">
      <figure class="basis-7/12 flex flex-col justify-between gap-16">
        <div class="text-[18px] flex flex-col gap-4 text-[#5a5a5a]">
          <p>Integritas dan kreativitas menjadi kunci dalam membangun produk digital terbaik untuk bisnis Anda</p>
          <div class="flex items-center gap-2 text-[#5449D6] quicksand">
            <a href="#" class="text-base font-bold">
              Lihat Semua Layanan TLab
            </a>
            <Icon name="heroicons:arrow-up-right-20-solid" />
          </div>
        </div>
        <BaseCardPhoto
          category="IT Managed Services"
          title="kesan.id - Kedaulatan
          Santri dan Kepribadian Muslim">
          <template #default>
            <img src="~/assets/images/yaya.png" alt="" class="w-full h-full object-cover rounded-lg">
          </template>
        </BaseCardPhoto>
      </figure>
      <figure class="basis-5/12 flex flex-col gap-8">
        <BaseCardPhoto
          category="Appliaction Development"
          title="Anterin.id Ridesharing company">
          <template #default>
            <img src="~/assets/images/yoyo.png" alt="" class="w-full h-full object-cover rounded-lg">
          </template>
        </BaseCardPhoto>
        <BaseCardPhoto
          category="Artificial intelligence"
          title="Juru.id Smart Parking">
          <template #default>
            <img src="~/assets/images/yuyu.png" alt="" class="w-full h-full object-cover rounded-lg">
          </template>
        </BaseCardPhoto>
      </figure>
    </div>
  </section>
</template>
