<template>
  <div class="mt-16">
    <div class="text-xl font-inter text-trueGray-850 font-bold">{{ cardsSection.title }}</div>
    <div class="mt-2 text-trueGray-500 font-inter text-sm">{{ cardsSection.snippet }}</div>
    <div class="flex justify-between mt-6">
      <LargeCard
        v-for="card in cardsSection.cards"
        :key="card.image"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardsSection']
}
</script>
