<script>
import Scene01 from '@/assets/images/Scene01.jpg';
import Scene02 from '@/assets/images/Scene02.jpg';
import Scene03 from '@/assets/images/Scene03.jpg';
import Scene04 from '@/assets/images/Scene04.jpg';
import Scene05 from '@/assets/images/Scene05.jpg';
import Scene06 from '@/assets/images/Scene06.jpg';
import Scene07 from '@/assets/images/Scene07.jpg';
import Scene08 from '@/assets/images/Scene08.png';
import Scene09 from '@/assets/images/Scene09.png';
import Scene10 from '@/assets/images/Scene10.jpg';
import Scene11 from '@/assets/images/Scene11.jpg';
import Scene12 from '@/assets/images/Scene12.jpg';

export default {
  props: ['images'],
  methods: {
    getImageUrl(image) {
      switch (image) {
        case 'Scene01.jpg':
          return Scene01;
        case 'Scene02.jpg':
          return Scene02;
        case 'Scene03.jpg':
          return Scene03;
        case 'Scene04.jpg':
          return Scene04;
        case 'Scene05.jpg':
          return Scene05;
        case 'Scene06.jpg':
          return Scene06;
        case 'Scene07.jpg':
          return Scene07;
        case 'Scene08.png':
          return Scene08;
        case 'Scene09.png':
          return Scene09;
        case 'Scene10.jpg':
          return Scene10;
        case 'Scene11.jpg':
          return Scene11;
        case 'Scene12.jpg':
          return Scene12;
        default:
          return null;
      }
    }
  }
};
</script>

<template>
    <div class="container flex-row" id="gallery">
      <div class="image" v-for="(image, index) in images" :key="index">
        <img :src="getImageUrl(image)">
      </div>
    </div>
  </template>
  
  
  <style scoped>
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
  
  #gallery {
    flex-wrap: wrap;
    height: max-content;
    gap: 56px;
  }
  
  #gallery .image {
    width: max-content;
    height: 200px;
    padding: 16px 16px 48px 16px;
    background-color: #fffbE7;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
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
  