<script setup lang="ts">
import BrandLogo from '~/assets/images/logo.svg'
const menus = ref([
  {
    id: 0,
    name: 'Company'
  },
  {
    id: 1,
    name: 'Layanan'
  },
  {
    id: 2,
    name: 'Studi Kasus'
  },
  {
    id: 3,
    name: 'Data Center'
  },
])
</script>

<template>
  <section class="pt-6 min-h-screen overflow-hidden">
    <nav class="flex justify-between px-[120px]">
      <div class="flex items-center gap-16">
        <BrandLogo />
        <ul class="flex gap-8">
          <li v-for="menu in menus" :key="menu.id" class="text-zinc-700">
            <NuxtLink to="#">{{ menu.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <button class="bg-[#00DE9C] text-white px-6 py-2 rounded-full">Hubungi Kami</button>
    </nav>
    <main>
      <slot />
    </main>
    <footer class="bg-[#f7fcff] py-[100px] px-[120px] flex justify-between relative">
      <div class="flex flex-col gap-10">
        <h2 class="font-bold text-[32px] quicksand">TLab Amazing <br> Delivering Innovation</h2>
        <div class="flex gap-5">
          <Icon class="w-6 h-6" name="bx:bxl-facebook" />
          <Icon class="w-6 h-6" name="bx:bxl-instagram-alt" />
          <Icon class="w-6 h-6" name="bx:bxl-youtube" />
        </div>
        <span class="text-xs">2010 - 2021 © TLab. All rights reserved.</span>
      </div>
      <nav class="flex flex-col gap-5 text-[#5A5A5A]">
        <div class="opacity-75 quicksand">
          <p>Company</p>
        </div>
        <ul class="flex flex-col gap-4">
          <li>About</li>
          <li>Career</li>
          <li>Clients</li>
          <li>logo</li>
          <li>brand Identity</li>
          <li>Article</li>
          <li>Studi kasus</li>
          <li>Kontak</li>
        </ul>
      </nav>
      <nav class="flex flex-col gap-5 text-[#5A5A5A]">
        <div class="opacity-75 quicksand">
          <p>Layanan</p>
        </div>
        <ul class="flex flex-col gap-4">
          <li>IT managed Services</li>
          <li>IT Consultant</li>
          <li>IT Training</li>
          <li>Big Data</li>
          <li>Artificial intelligent</li>
          <li>Cloud Computing</li>
          <li>Internet Of Things</li>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>System Integration</li>
          <li>System Information</li>
        </ul>
      </nav>
      <nav class="flex flex-col gap-5 text-[#5A5A5A]">
        <div class="opacity-75 quicksand">
          <p>Kontak</p>
        </div>
        <div class="flex flex-col gap-16">
          <div class="font-bold quicksand">
            <p>PT. Teknologi Kode Indonesia</p>
            <p>contact@tlab.co.id</p>
          </div>
          <div class="flex flex-col gap-4">
            <p>Head Office <br> Jl Tanjung No.126, Sorosutan, <br>  Umbulharjo, <br>  Yogyakarta - 55162</p>
            <p>
              <Icon name="bx:bxs-phone" />
              (0274) - 2870394
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <p>Jakarta Office <br> SOHO Pancoran Unit S-1210 <br> Jl. Let. Jend. MT. Haryono Kav 2-3 <br> Pancoran, <br> Jakarta Selatan 12810</p>
            <p>
              <Icon name="bx:bxs-phone" />
              (0274) - 2870394
            </p>
          </div>
        </div>
      </nav>
      <div class="absolute -bottom-80 -left-64 w-[550px] h-[550px] bg-[#5a5a5a] opacity-[0.1] rounded-[224px]" />
    </footer>
  </section>
</template>
