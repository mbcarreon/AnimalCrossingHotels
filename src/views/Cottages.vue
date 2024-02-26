<script>
import cottageData from "../assets/data/cottages.json";
import PlaceContainer from "../components/PlaceContainer.vue";
export default {
  components: {
    PlaceContainer
  },
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
        <PlaceContainer :place="cottage" />
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