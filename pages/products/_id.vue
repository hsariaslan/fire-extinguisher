<template>
  <div>
    <div v-if="product">
      <div class="w-320 flex justify-between">
        <img :src="`http://localhost:3000/@fs/var/www/html/fire-extinguisher/client/assets/images/${product.image}`" alt="fire-extinguisher" class="w-180 h-100 object-cover">
        <div class="bg-trueGray-100 w-128 h-100 rounded-lg px-4 py-2">
          <div class="font-inter text-2xl text-trueGray-850 font-semibold">{{ product.title }}</div>
          <div class="font-inter text-trueGray-700 mt-4">{{ product.snippet }}</div>

          <div @click="$refs.modal.show()" class="font-inter text-white mt-6 bg-reddyOrange-700 text-center cursor-pointer hover:bg-trueRed-1000 p-4 rounded-full text-sm font-bold">
            Rent
          </div>
        </div>
      </div>

      <div>
        <ProductAttribute
          v-for="attr in 4"
          :key="attr.id"
          :attr="attr"
        />
      </div>
      <div class="py-10 my-4 text-trueGray-600 border-t border-b">
        {{ product.description }}
      </div>
      <div class="font-inter font-bold text-trueGray-850 text-xl mt-4">Customer Reviews</div>
      <CustomerReview
        v-for="reviewer in reviewers.results"
        :key="reviewer.login.uuid"
        :reviewer="reviewer"
      />
      <t-modal
        :header="product.title"
        ref="modal"
      >
      <div class="text-sm text-trueGray-500">
        {{ product.snippet }}
      </div>
      <div class="mt-6 mx-auto w-6/12">
        <vc-date-picker :value="null" color="red" is-range />
      </div>

      <template v-slot:footer>
        <div class="flex justify-between">
          <t-button type="button" @click="() => {
              addItem(product.id)
              hideModal()
            }"
          >
            Order
          </t-button>
        </div>
      </template>
    </t-modal>
    </div>
    <div v-else>
      <PageNotFound />
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  export default {
    props: ['product'],
    data() {
      return {
        reviewers: []
      }
    },
    async fetch() {
      this.reviewers = await fetch(
        'https://randomuser.me/api/?results=5'
      ).then(res => res.json())
    },
    computed: {
      product() {
        return this.$store.getters.getProductById(this.$route.params.id)
      }
    },
    methods: {
      hideModal() {
        this.$refs['modal'].hide()
      },
      ...mapMutations(['addItem'])
    }
  }
</script>

<style scoped>

</style>
