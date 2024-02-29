<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="box" style="--size: 20px;">
    <RouterLink to="/" active-class="active">Home</RouterLink>
    <RouterLink to="/cottages" active-class="active">Cottages</RouterLink>
    <RouterLink to="/gallery" active-class="active">Gallery</RouterLink>
    <RouterLink to="/about" active-class="active">Staff</RouterLink>
  </div>
</template>

<style scoped>
.box {
  --size: 50px;
  --R: calc(var(--size)*1.28);
  
  display: flex;
  padding: 32px 0 56px 0;
  flex-direction: row;
  gap: 24px;
  border: none;
  justify-content: center;
  align-content: center;
  text-align: center;
  
  --mask:
    radial-gradient(23.79px at 50% calc(100% - 33.6px),#000 99%,#0000 101%) calc(50% - 32px) 0/64px 100%,
    radial-gradient(23.79px at 50% calc(100% + 17.6px),#0000 99%,#000 101%) 50% calc(100% - 16px)/64px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  background: repeating-linear-gradient(
    -45deg,
    #ffed8a 0,
    #ffed8a 10px,
    #ffe375 10px,
    #ffe375 20px
  );
}

.box + .box {
  --d: bottom;
}

.box.mask {
  -webkit-mask:
    radial-gradient(var(--R) at 50% calc(100% - var(--size) - var(--p)), blue 99%, #0000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(100% + var(--p)), #0000 99%, red 101%) 50% calc(100% - var(--size))/calc(4*var(--size)) 100% repeat-x;
  background: repeating-linear-gradient(
    -45deg,
    #ffed8a 0,
    #ffed8a 10px,
    #ffe375 10px,
    #ffe375 20px
  );  
  border: none;
}

a {
  width: max-content;
  height: max-content;
  padding: 8px 16px;
  background-color: #fffbE7;
  border-radius: 100px;
  box-shadow: 0px 4px #907c57;
  color: #907c57;
  font-family: 'Seurat';
  font-size: 1rem;
  letter-spacing: .5px;
  text-decoration: none;
  transition: .25s;
  cursor: pointer;
}

a:hover {
  transform: translateY(4px);
  box-shadow: none;
}

.active {
  color: #ffffff;
  background-color: #907c57;
  box-shadow: 0px 4px #63563b;
}
</style>