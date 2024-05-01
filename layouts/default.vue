<script setup lang="ts">
import { ref } from 'vue';

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

</script>
<template>
  <q-layout view="hHh LPR fFf">
    <q-header class="bg-transparent">
      <q-toolbar>

        <q-toolbar-title>
          <img src="/icons/boom-wordmark-positive_transparent.png" alt="Boom Logo" height="68" />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered>
      <q-list>
        <q-item v-for="item in navigation" :to="item._path" :key="item.title">
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
