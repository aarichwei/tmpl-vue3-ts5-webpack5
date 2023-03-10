<template>
  <div class="root">
    <div>home</div>
    <div @click="toAbout">click to about</div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toAbout = () => {
  router.push({
    name: 'about',
  });
}
</script>

<style></style>
