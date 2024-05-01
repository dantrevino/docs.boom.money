<script setup>
const { page } = useContent()
</script>

<template>
  <ClientOnly>

    <ContentRenderer :key="page._id" :value="page" />
  </ClientOnly>
</template>
