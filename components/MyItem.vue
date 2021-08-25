<template>
  <div class="flex justify-between mb-10">
    <img :src="`http://localhost:3000/@fs/var/www/html/fire-extinguisher/client/assets/images/${item.image}`" alt="fire-extinguisher" class="w-78 mr-10 rounded-xl">
    <div>
      <div class="text-lg text-trueGray-850 font-inter font-semibold">{{ item.title }}</div>
      <div class="mt-4 text-trueGray-500 font-inter text-sm">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
