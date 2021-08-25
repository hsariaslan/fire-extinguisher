<template>
  <div>
    <t-modal
      header="Title of the modal"
      ref="modal"
    >
      Content of the modal.
      <template v-slot:footer>
        <div class="flex justify-between">
          <t-button type="button">
            Ok
          </t-button>
        </div>
      </template>
    </t-modal>
  </div>
</template>

<script>
  export default {}
</script>
