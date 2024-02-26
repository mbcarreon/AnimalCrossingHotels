<template>
  <div class="content">
    <div class="container flex-col">
    <h2 class="custom-text">Gallery</h2>
    <div class="container flex-row" id="gallery">
      <div class="image"><img src="/src/assets/images/Scene01.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene02.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene03.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene04.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene05.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene06.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene07.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene08.png" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene09.png" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene10.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene11.jpg" width="100%"></div>
      <div class="image"><img src="/src/assets/images/Scene12.jpg" width="100%"></div>
    </div>
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
