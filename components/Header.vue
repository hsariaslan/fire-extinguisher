<template>
  <header class="w-full h-16 bg-trueGray-800 flex items-center justify-between text-trueGray-200">
    <NuxtLink to="/">
      <div class="group h-16 flex justify-between cursor-pointer">
        <div class="w-16 h-16">
          <img src="../static/logo-64.png" class="w-16 h-16 max-w-none logo" alt="fire-extinguisher-logo">
        </div>
        <div class="h-16 flex items-center px-5 transition duration-150 group-hover:bg-white group-hover:text-trueGray-800">Fire Extinguisher</div>
      </div>
    </NuxtLink>
    <div class="flex justify-between w-60">
      <NuxtLink to="/products" class="header-links">Products</NuxtLink>
      <NuxtLink to="/my-items" class="header-links">My Items</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {}
</script>
