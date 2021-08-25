<template>
  <nuxt-link :to="`/products/${card.id}`" class="w-100">
    <img :src="`http://localhost:3000/@fs/var/www/html/fire-extinguisher/client/assets/images/${card.image}`" alt="fire-extinguisher" class="rounded-lg w-100 h-64 object-cover">
    <div class="text-lg font-inter font-bold text-trueGray-800 mt-3">{{ card.title }}</div>
    <div class="text-sm text-trueGray-500 font-inter mt-3">{{ card.snippet }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['card']
}
</script>
