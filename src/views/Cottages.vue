<script>
import cottageData from "../assets/data/cottages.json";
export default {
  data() {
    return {
      cottages: cottageData
    };
  }
};
</script>

<template>
  <div class="content">
    <div class="container flex-col">
      <h2 class="custom-text">Cottages</h2>
      <div class="container flex-row" v-for="(cottage, index) in cottages" :key="index">
        <div class="left-container">
          <img :src="cottage.image" width="100%">
        </div>
        <div class="right-container">
          <h3 :style="{ 'background-color': cottage.backgroundColor, 'color': cottage.color }">{{ cottage.name }}</h3>
          <p>{{ cottage.description }}</p>
        </div>
      </div>
    </div>
    <div class="container flex-col">
      <a>Book Now</a>
    </div>
  </div>
</template>

<style scoped>
.custom-text {
  color: #eed25a;
  font-family: 'Fink Heavy';
  font-size: 6rem;
  text-shadow:
    1px 0px 0px #674d2b,
    -1px 0px 0px #674d2b,
    1px 1px 0px #674d2b,
    0px -1px 0px #674d2b,
    1px 2px 0px #674d2b,
    1px 3px 0px #674d2b,
    1px 4px 0px #674d2b,
    1px 5px 0px #674d2b,
    1px 6px 0px #674d2b,
    1px 7px 0px #674d2b,
    1px 8px 0px #674d2b,
    1px 9px 0px #674d2b,
    1px 10px 0px #674d2b;
}

p {
  font-size: 1rem;
  letter-spacing: .5px;
  background-color: #fffbE7;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 88px;
  padding: 80px 0;
}

.container {
  width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 88px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 56px;
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

a {
  width: max-content;
  height: max-content;
  padding: 8px 24px;
  background-color: #fffbE7;
  border-radius: 100px;
  box-shadow: 0px 4px #63563b;
  color: #ffffff;
  background-color: #907c57;
  font-family: 'Seurat';
  font-size: 1.3rem;
  letter-spacing: .5px;
  text-decoration: none;
  transition: .25s;
  cursor: pointer;
}

a:hover {
  transform: translateY(4px);
  box-shadow: none;
}
</style>