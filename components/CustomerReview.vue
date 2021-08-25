<template>
  <div class="mt-5 flex order-1">
    <img :src="reviewer.picture.medium" alt="user" class="rounded-full w-12 h-12">
    <div class="ml-5">
      <div class="font-semibold font-inter text-sm">{{ reviewer.login.username }}</div>
      <div class="font-inter text-xs text-trueGray-600 mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['reviewer']
  }
</script>

<style scoped>

</style>
