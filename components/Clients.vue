<script setup lang="ts">
// import GojekLogo from '~/assets/images/suhu.svg'
const testimonies = ref([
  {
    id: 0,
    desc: "Our experience tells us it's better this way. Not only because it is more efficient – the outcome is simply much better.",
    background: 'blue',
  },
  {
    id: 1,
    desc: "Sejak akhir 2012, mulai dari konsep POS sederhana. Terus berkembang memenuhi kebutuhan. Dengan Tlab sistem dapat bertumbuh sesuai kebutuhan.",
    background: 'purple',
  },
  {
    id: 2,
    desc: "Kreativitas, tanggung jawab, serta komunikasi yang andal menjadi kunci kelancaran kerjasama kami bersama TLab dalam membangun aplikasi Anterin.",
    background: 'green',
  },
]
)
</script>

<template>
  <section class="flex flex-col gap-[80px] relative py-20 px-[120px]">
    <div class="w-full absolute -top-8 left-0 bg-[#f4faff] h-[100px] transform -rotate-1 scale-x-100  rounded-3xl" />
    <div class="w-full absolute top-4 left-0 bg-[#f4faff] h-[560px]" />
    <header class="flex justify-between items-start z-30">
      <h2 class="text-[32px] text-[#5a5a5a] font-bold quicksand">Connect<br>& Collaborate</h2>
      <div class="flex flex-col gap-8 text-[18px]">
        <p>Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan <br> produk terbaik</p>
        <div class="flex items-center gap-2 text-[#5449D6] quicksand">
            <a href="#" class="text-base font-bold">
              Lihat Semua Layanan TLab
            </a>
            <Icon name="heroicons:arrow-up-right-20-solid" />
          </div>
      </div>
    </header>
    <div class="flex justify-between">
      <BaseCardTesti
        v-for="testimoni in testimonies"
        :key="testimoni.id"
        :client-say="testimoni.desc"
        :background="testimoni.background">
        <template #default>
          <img src="~/assets/images/assets-testimonial.png" alt="" class="w-full h-full">
          <div class="absolute bottom-0 left-0 p-4 flex gap-6 items-center bg-white rounded-tr-lg">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" class="w-16 h-16 rounded-full object-cover">
            <div class="flex flex-col gap-1 text-sm">
              <p>Hamdan Hamedan</p>
              <p>CEO of Kesan Indonesia</p>
            </div>
          </div>
        </template>
      </BaseCardTesti>
    </div>
    <div class="grid grid-cols-6 grid-rows-2 gap-8 justify-items-end">
      <img src="~/assets/images/google.png" alt="">
      <img src="~/assets/images/jaya-motor.png" alt="">
      <img src="~/assets/images/suhu.png" alt="">
      <img src="~/assets/images/anterin.png" alt="">
      <img src="~/assets/images/kesan.png" alt="">
      <img src="~/assets/images/ipb.png" alt="">
      <img src="~/assets/images/kehutanan.png" alt="">
      <img src="~/assets/images/jatim.png" alt="">
      <img src="~/assets/images/ugm.png" alt="">
      <img src="~/assets/images/gojek.png" alt="">
      <img src="~/assets/images/grab.png" alt="">
      <img src="~/assets/images/uber.png" alt="">
    </div>
  </section>
</template>
