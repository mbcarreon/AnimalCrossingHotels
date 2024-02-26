<template>
  <div class="container flex-col" id="headline">
    <img src="/src/assets/images/AnimalCrossingEmblem.png" width="500px">
  </div>
  <div class="container flex-col" id="description">
    <p>
      Escape to the whimsical world of Animal Crossing with enchanting cottage reservations! Indulge in the charm of our themed cottages nestled amidst lush landscapes and friendly villagers. Book your stay today and experience the magic of Animal Crossing in the comfort of your own cottage hideaway!
    </p>
  </div>
  <div class="container flex-col" id="cottages">
    <h2 class="custom-text">Cottages</h2>
    <div class="container flex-row">
      <div class="left-container">
        <img :src="cottages[currentCottageIndex].image" width="100%">
      </div>
      <div class="right-container">
        <h3 :style="{ 'background-color': cottages[currentCottageIndex].backgroundColor, 'color': cottages[currentCottageIndex].color }">{{ cottages[currentCottageIndex].name }}</h3>
        <p>{{ cottages[currentCottageIndex].description }}</p>
      </div>
    </div>
    <div class="indicators">
      <span v-for="(cottage, index) in cottages" :key="index" :class="{ active: index === currentCottageIndex }" @click="jumpToCottage(index)"></span>
    </div>
  </div>
  <div class="container flex-col">
    <h2 class="custom-text">Gallery</h2>
    <div class="container flex-row" id="gallery">
      <div class="image"><img src="/src/assets/images/Scene01.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene02.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene03.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene04.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene05.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene06.jpg" width="100%"></div>
    </div>
  </div>
  <div class="container flex-col" id="attractions">
    <h2 class="custom-text">Attractions</h2>
    <div class="container flex-row">
      <div class="left-container">
        <img :src="attractions[currentAttractionIndex].image" width="100%">
      </div>
      <div class="right-container">
        <h3 :style="{ 'background-color': attractions[currentAttractionIndex].backgroundColor, 'color': attractions[currentAttractionIndex].color }">{{ attractions[currentAttractionIndex].name }}</h3>
        <p>{{ attractions[currentAttractionIndex].description }}</p>
      </div>
    </div>
    <div class="indicators">
      <span v-for="(attraction, index) in attractions" :key="index" :class="{ active: index === currentAttractionIndex }" @click="jumpToAttraction(index)"></span>
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
      ],
      attractions: [
        {
          name: "Able Sisters",
          image: "/src/assets/images/AbleSistersNH.png",
          description: "Step into the Able Sisters' tailor shop and immerse yourself in a world of fashion and creativity. With their curated collection of clothing and accessories, you can express your unique style and personality, turning every stroll through the charming cottages of Animal Crossing into a runway-worthy event.",
          backgroundColor: "#c2dc64",
          color: "#7c973A"
        }
      ],
      currentCottageIndex: 0,
      currentAttractionIndex: 0,
      cottageIntervalId: null,
      attractionIntervalId: null
    };
  },
  methods: {
    startCottageCarousel() {
      this.cottageIntervalId = setInterval(() => {
        this.nextCottage();
      }, 3000);
    },
    startAttractionCarousel() {
      this.attractionIntervalId = setInterval(() => {
        this.nextAttraction();
      }, 3000);
    },
    nextCottage() {
      if (this.currentCottageIndex < this.cottages.length - 1) {
        this.currentCottageIndex++;
      } else {
        this.currentCottageIndex = 0;
      }
      console.log('Next cottage index:', this.currentCottageIndex);
    },
    nextAttraction() {
      if (this.currentAttractionIndex < this.attractions.length - 1) {
        this.currentAttractionIndex++;
      } else {
        this.currentAttractionIndex = 0;
      }
      console.log('Next attraction index:', this.currentAttractionIndex);
    },
    stopCottageCarousel() {
      clearInterval(this.cottageIntervalId);
    },
    stopAttractionCarousel() {
      clearInterval(this.attractionIntervalId);
    },
    jumpToCottage(index) {
      this.currentCottageIndex = index;
      this.stopCottageCarousel();
    },
    jumpToAttraction(index) {
      this.currentAttractionIndex = index;
      this.stopAttractionCarousel();
    }
  },
  mounted() {
    this.startCottageCarousel();
    this.startAttractionCarousel();
  },
  beforeUnmount() {
    this.stopCottageCarousel();
    this.stopAttractionCarousel();
  }
};
</script>

<style scoped>

h1 {
  font-size: 3.5rem;
}

.custom-text {
  margin-bottom: 48px;
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
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 48px;
}

#cottages .left-container {
  width: 230px;
  margin: auto;
}

#attractions .left-container {
  width: 250px;
  margin: auto;
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

.indicators {
    display: flex;
    justify-content: center;
    margin-top: 48px;
  }

.indicators span {
  width: 14px;
  height: 14px;
  background-color: #fffbE7;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
}

.indicators span.active {
  outline: 4px solid #2cb8AA;
}

#headline {
  padding-bottom: 48px;
}

#description p {
  width: 80%;
  padding: 32px 48px;
  border-radius: 200px;
  font-size: 1rem;
  text-align: center;
  transition: .25s;
  cursor: pointer;
}

#gallery {
  flex-wrap: wrap;
  height: max-content;
  gap: 32px;
}

#gallery .image {
  width: max-content;
  height: 150px;
  border: 2px solid #fffbE7;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: .25s;
}

#gallery .image img {
  width: auto;
  height: 100%;
  display: block;
}

#gallery .image:hover {
  transform: scale(1.05);
}
</style>