<script setup lang="ts">
const { dark } = useQuasar();

const search = ref('');
const leftDrawer = ref(true);

function toggleDarkMode() {
  dark.set(!dark.isActive);
}
const themeIcon = computed(() => (dark.isActive ? 'light_mode' : 'dark_mode'));


function toggleLeftDrawer() {
  leftDrawer.value = !leftDrawer.value;
}

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

</script>
<template>
  <!-- <q-layout view="hHh LpR fFf"> -->
  <q-layout view="hHh lpR lff">
    <q-header bordered :class="dark.isActive ? 'bg-dark' : 'bg-white'">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn icon="menu" @click="toggleLeftDrawer" v-if="$q.screen.lt.md" />
          <img
            :src="dark.isActive ? '/icons/boom-wordmark-reverse_transparent.png' : '/icons/boom-wordmark-positive_transparent.png'"
            alt="Boom Logo" height="68" />
        </q-toolbar-title>
        <!-- <q-space />
        <q-input size="sm" rounded standout v-model="search" type="search" placeholder="Search" style="width: 60%;" />
        <q-space /> -->
        <q-btn round :icon="themeIcon" color="primary" @click="toggleDarkMode" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawer" show-if-above bordered>
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