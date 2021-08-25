<template>
  <div class="mt-12">
    <div class="text-xl text-trueGray-850 font-inter font-bold">{{ cardsSection.title }}</div>
    <div class="flex justify-between flex-wrap mt-5">
      <SmallCard
        v-for="card in cardsSection.cards"
        :key="card.id"
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
