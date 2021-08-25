<template>
  <nuxt-link :to="`/products/${card.id}`">
    <img :src="`http://localhost:3000/@fs/var/www/html/fire-extinguisher/client/assets/images/${card.image}`" alt="fire-extinguisher" class="rounded-lg w-78 my-1 h-48 object-cover cursor-pointer">
  </nuxt-link>
</template>

<script>
export default {
  props: ['card']
}
</script>
