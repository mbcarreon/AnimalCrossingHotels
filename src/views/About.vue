<script>
import characterData from "../assets/data/characters.json"; 

export default {
  data() {
    return {
      characters: characterData,
      currentCharacterIndex: 0,
      showModal: false
    };
  },
  methods: {
    showCharacterModal(index) {
      this.currentCharacterIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>


<template>
  <div class="container flex-col" id="characters">
    <h2 class="custom-text">Staff</h2>
    <div class="character-row">
      <div
        v-for="(character, index) in characters"
        :key="index"
        class="character-card"
        @click="showCharacterModal(index)"
      >
        <img :src="character.image" :alt="character.name" class="character-image" />
        <p class="character-name">{{ character.name }}</p>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
       
        <h3>{{ characters[currentCharacterIndex].name }}</h3>
        <p>{{ characters[currentCharacterIndex].description }}</p>
        
       <center> <button class="close" @click="closeModal">Close</button></center>
      </div>
    </div>
  </div>
</template>


<style scoped>

.character-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.character-card {
  width: calc(30% - 40px); 
  margin-bottom: 20px;
  text-align: center;
}
.character-card {
  cursor: pointer;
  width: 25%; 
  margin-right: 20px;
  margin-bottom: 20px; 
}
.character-card:hover {
  transform: scale(1.05);
}

.character-image {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.character-name {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
}


.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0, 0, 0, 0.4); 
}

.modal-content {
  background-color: #fffbe7;
  margin: 15% auto; 
  padding: 20px;
  border-radius: 50px;
  max-width: 600px;
  position: relative;
}

.close {
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  align-content: center;
  border-radius: 150px;
  color: #ffffff;
  background-color: #907c57;
  box-shadow: 0px 4px #63563b;
  border-radius: 20px;
  border: 1px solid #63563b;
}

.close:hover,
.close:focus {
  color: #eed25a;

  cursor: pointer;
}

.modal-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
}

.modal-description {
  text-align: justify;
  align-content: center;
}
h3{
  color: #eed25a;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;

}

p{
  font-size: 1rem;
  letter-spacing: 0.5px;
   color:#333333;
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
  gap: 48px;
}
</style>
