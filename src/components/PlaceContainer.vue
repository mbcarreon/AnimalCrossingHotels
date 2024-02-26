<script>
export default {
  props: ['place']
};
</script>

<template>
  <div class="left-container">
      <img :src="place.image" width="100%">
  </div>
  <div class="right-container">
      <h3 :style="{ 'background-color': place.backgroundColor, 'color': place.color }">{{ place.name }}</h3>
      <p>{{ place.description }}</p>
  </div>
</template>

<style scoped>
p {
  font-size: 1rem;
  letter-spacing: 0.5px;
  background-color: #fffbe7;
}

.left-container {
  width: 250px;
}

.right-container h3 {
  width: max-content;
  margin: 0 0px -16px 24px;
  padding: 8px 24px;
  border-radius: 100px;
  font-family: 'Seurat';
  font-size: 1.3rem;
  letter-spacing: .8px;
  position: relative;
  z-index: 1;
}
.right-container p {
  width: 500px;
  height: max-content;
  padding: 40px 40px 32px 40px;
  border-radius: 100px;
  text-align: center;
  position: relative;
  z-index: 0;
}
</style>
