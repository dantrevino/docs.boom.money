<script setup>
const { page } = useContent()
</script>

<template>

  <ClientOnly>
    <q-page padding>
      <ContentRenderer :key="page._id" :value="page" />
    </q-page>
  </ClientOnly>
</template>
