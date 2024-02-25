<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/" active-class="active">HOME</RouterLink>
    <RouterLink to="/houses" active-class="active">HOUSES</RouterLink>
    <RouterLink to="/gallery" active-class="active">GALLERY</RouterLink>
    <RouterLink to="/contact" active-class="active">CONTACT</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 24px 32px;
  background-color: #ffffff;
  text-align: center;
}

a {
  margin-right: 24px;
  color: #74664b;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #e9dec0;
  border-radius: 100px;
}

.active {
  color: #ffffff;
  background-color: #74664b;
}
</style>