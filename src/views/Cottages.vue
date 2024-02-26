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

<script>
export default {
  data() {
    return {
      cottages: [
        {
          name: "Apple Blossom Cottage",
          image: "/src/assets/images/AppleHouseNH.png",
          description: "Welcome to Apple Blossom Cottage, where the charm of apple-themed decorations fills every corner. Immerse yourself in the rustic allure of apple orchards and indulge in the sweet aroma of freshly baked apple pies.",
          backgroundColor: "#ff5d82",
          color: "#ffffff"
        },
        {
          name: "Stitches Playful Haven",
          image: "/src/assets/images/StitchesHouseNH.png",
          description: "Step into Stitches Playful Haven, a whimsical realm filled with colorful fabrics and playful designs. A cheerful retreat awaits anyone who adores all things cute and cuddly.",
          backgroundColor: "#ffaa35",
          color: "#8d4702"
        },
        {
          name: "Chai Serenity Hut",
          image: "/src/assets/images/ChaiHouseNH.png",
          description: "Embark on a journey of tranquility at Chai Serenity Hut. Let the soothing aroma of warm chai tea envelop you as you relax in an atmosphere adorned with exotic patterns and cozy cushions.",
          backgroundColor: "#cefeff",
          color: "#50bae4"
        },
        {
          name: "Pekoe Zen Retreat",
          image: "/src/assets/images/PekoeHouseNH.png",
          description: "Find peace and serenity at Pekoe Zen Retreat, inspired by Japanese aesthetics. Immerse yourself in the tranquil ambiance and elegant decor, making it the perfect refuge for harmony seekers.",
          backgroundColor: "#ffffff",
          color: "#7d7d7d"
        },
        {
          name: "Teddy's Snug Cabin",
          image: "/src/assets/images/TeddyHouseNH.png",
          description: "Experience the warmth and comfort of Teddy's Snug Cabin, where plush teddy bears and warm blankets create an atmosphere of nostalgia and tranquility.",
          backgroundColor: "#ff7814",
          color: "#feebab"
        },
        {
          name: "Willow's Dreamy Sanctuary",
          image: "/src/assets/images/WillowHouseNH.png",
          description: "Enter Willow's Dreamy Sanctuary and immerse yourself in a world of enchantment. Let the soft glow of fairy lights and the delicate scent of wildflowers transport you to a cozy retreat.",
          backgroundColor: "#fdfc8f",
          color: "#8f996a"
        }
      ]
    };
  }
};
</script>

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