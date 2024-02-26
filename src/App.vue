<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
    <Nav/>
    <div class="container">
        <RouterView/>
    </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 88px 0;
}
</style>