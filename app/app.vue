<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })
useHead({ title: 'Karsh Sharma | Full-stack Developer', meta: [{ name: 'description', content: "Karsh Sharma's full-stack development portfolio." }], link: [{ rel: 'icon', href: '/favicon.png' }] })
</script>
<template><div class="site-shell" data-hydrated="true">
  <nav class="navbar"><div class="container nav-inner"><NuxtLink class="brand" to="/home">usharma</NuxtLink>
    <button class="nav-toggle" type="button" :aria-expanded="open" aria-controls="primary-navigation" aria-label="Toggle navigation" @click="open=!open"><span /></button>
    <div id="primary-navigation" class="nav-links" :class="{open}" aria-label="Primary navigation"><NuxtLink v-for="item in ['home','news','sait','contact']" :key="item" class="nav-link" active-class="active" :to="`/${item}`">{{ item }}</NuxtLink></div>
  </div></nav><main><NuxtPage /></main><footer class="footer"><div class="container">Copyright © Karsh Sharma {{ new Date().getFullYear() }}</div></footer>
</div></template>
