<script>
  import cottageData from "../assets/data/cottages.json";
  import attractionData from "../assets/data/attractions.json";
  export default {
    data() {
      return {
        cottages: cottageData,
        attractions: attractionData,
        currentCottageIndex: 0,
        currentAttractionIndex: 0,
        cottageIntervalId: null,
        attractionIntervalId: null,
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
        console.log("Next cottage index:", this.currentCottageIndex);
      },
      nextAttraction() {
        if (this.currentAttractionIndex < this.attractions.length - 1) {
          this.currentAttractionIndex++;
        } else {
          this.currentAttractionIndex = 0;
        }
        console.log("Next attraction index:", this.currentAttractionIndex);
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
      },
    },
    mounted() {
      this.startCottageCarousel();
      this.startAttractionCarousel();
    },
    beforeUnmount() {
      this.stopCottageCarousel();
      this.stopAttractionCarousel();
    },
  };
</script>

<template>
  <div class="content">
    <div class="container flex-col" id="headline">
      <img src="/src/assets/images/AnimalCrossingEmblem.png" width="500px" />
    </div>
    <div class="container flex-col" id="description">
      <p>
        Escape to the whimsical world of Animal Crossing with enchanting cottage
        reservations! Indulge in the charm of our themed cottages nestled amidst
        lush landscapes and friendly villagers. Book your stay today and
        experience the magic of Animal Crossing in the comfort of your own
        cottage hideaway!
      </p>
    </div>
    <div class="container flex-col" id="cottages">
      <h2 class="custom-text">Cottages</h2>
      <div class="container flex-row">
        <div class="left-container">
          <img :src="cottages[currentCottageIndex].image" width="100%" />
        </div>
        <div class="right-container">
          <h3
            :style="{
              'background-color': cottages[currentCottageIndex].backgroundColor,
              color: cottages[currentCottageIndex].color,
            }"
          >
            {{ cottages[currentCottageIndex].name }}
          </h3>
          <p>{{ cottages[currentCottageIndex].description }}</p>
        </div>
      </div>
      <div class="indicators">
        <span
          v-for="(cottage, index) in cottages"
          :key="index"
          :class="{ active: index === currentCottageIndex }"
          @click="jumpToCottage(index)"
        ></span>
      </div>
    </div>
    <div class="container flex-col">
      <h2 class="custom-text">Gallery</h2>
      <div class="container flex-row" id="gallery">
        <div class="image">
          <img src="/src/assets/images/Scene01.jpg" width="100%" />
        </div>
        <div class="image">
          <img src="/src/assets/images/Scene02.jpg" width="100%" />
        </div>
        <div class="image">
          <img src="/src/assets/images/Scene03.jpg" width="100%" />
        </div>
        <div class="image">
          <img src="/src/assets/images/Scene04.jpg" width="100%" />
        </div>
        <div class="image">
          <img src="/src/assets/images/Scene05.jpg" width="100%" />
        </div>
        <div class="image">
          <img src="/src/assets/images/Scene06.jpg" width="100%" />
        </div>
      </div>
    </div>
    <div class="container flex-col" id="attractions">
      <h2 class="custom-text">Attractions</h2>
      <div class="container flex-row">
        <div class="left-container">
          <img :src="attractions[currentAttractionIndex].image" width="100%" />
        </div>
        <div class="right-container">
          <h3
            :style="{
              'background-color':
                attractions[currentAttractionIndex].backgroundColor,
              color: attractions[currentAttractionIndex].color,
            }"
          >
            {{ attractions[currentAttractionIndex].name }}
          </h3>
          <p>{{ attractions[currentAttractionIndex].description }}</p>
        </div>
      </div>
      <div class="indicators">
        <span
          v-for="(attraction, index) in attractions"
          :key="index"
          :class="{ active: index === currentAttractionIndex }"
          @click="jumpToAttraction(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-text {
  margin-bottom: 48px;
  color: #eed25a;
  font-family: "Fink Heavy";
  font-size: 6rem;
  text-shadow: 1px 0px 0px #674d2b, -1px 0px 0px #674d2b, 1px 1px 0px #674d2b,
    0px -1px 0px #674d2b, 1px 2px 0px #674d2b, 1px 3px 0px #674d2b,
    1px 4px 0px #674d2b, 1px 5px 0px #674d2b, 1px 6px 0px #674d2b,
    1px 7px 0px #674d2b, 1px 8px 0px #674d2b, 1px 9px 0px #674d2b,
    1px 10px 0px #674d2b;
}

p {
  font-size: 1rem;
  letter-spacing: 0.5px;
  background-color: #fffbe7;
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
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 56px;
}

#description p {
  width: 80%;
  padding: 32px 48px;
  border-radius: 100px;
  font-size: 1rem;
  text-align: center;
  transition: 0.25s;
}

#cottages .left-container {
  width: 250px;
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
  font-family: "Seurat";
  font-size: 1.3rem;
  letter-spacing: 0.8px;
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
  background-color: #fffbe7;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
}

.indicators span.active {
  outline: 4px solid #674d2b;
}

#gallery {
  flex-wrap: wrap;
  height: max-content;
  gap: 56px;
}

#gallery .image {
  width: max-content;
  height: 200px;
  padding: 16px 16px 48px 16px;
  background-color: #fffbe7;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
}

#gallery img {
  width: auto;
  height: 100%;
  display: block;
}

#gallery .image:hover {
  transform: scale(1.15);
}
</style>
