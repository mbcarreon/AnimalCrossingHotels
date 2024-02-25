<template>
  <div>
    <div class="container flex-col" id="headline">
      <img src="/src/assets/images/AnimalCrossingEmblem.png" width="500px">
    </div>
    <div class="container flex-col text-center" id="description">
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
    </div>
    <div class="container flex-col" id="houses">
      <h2>Houses</h2>
      <div class="container flex-row">
        <button class="prev-button">&lt;</button>
        <div class="flex-row">
          <div class="left-container">
            <img src="/src/assets/images/AppleHouseNH.png" width="100%">
          </div>
          <div class="right-container">
            <h3>House Name</h3>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <button class="next-button">&gt;</button>
      </div>
    </div>
    <div class="container flex-col" id="attractions">
      <h2>Attractions</h2>
      <div class="container flex-row">
        <button class="prev-button">&lt;</button>
        <div class="flex-row">
          <div class="left-container">
            <img src="" width="100%">
          </div>
          <div class="right-container">
            <h3>Attraction Name</h3>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <button class="next-button">&gt;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
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
}

.left-container {
  width: 200px;
  margin-right: 56px;
}

.right-container {
  width: 500px;
}

.text-center {
  text-align: center;
}

h1 {
  font-size: 3.5rem;
}

h2 {
  color: #eed25a;
  font-family: 'Fink Heavy';
  font-size: 3.5rem;
  text-shadow:
    -1px -1px 0 #d7af3a,
    1px -1px 0 #917627,
    -1px 1px 0 #917627,
    1px 1px 0 #917627,
    4px 4px 0px rgba(124, 93, 53, 1);
  margin-bottom: 32px;
}

h3 {
  font-family: 'Fink Heavy';
  font-size: 2rem;
  margin-bottom: 16px;
}

h4 {
  font-size: 1rem;
}

p {
  font-size: .85rem;
  margin-bottom: 16px;
}

#headline,
#description,
#houses,
#attractions {
  padding: 56px 88px;
}

.content {
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 48px 32px 48px;
}

.prev-button {
  margin-right: 64px;
}

.next-button {
  margin-left: 64px;
}

.prev-button,
.next-button {
  outline: none;
  width: max-content;
  height: max-content;
  padding: 8px 20px;
  background-color: #74664b;
  border: none;
  border-radius: 100px;
  box-shadow: 0px 4px 0px #352e22;
  color: #fffae4;
  font-family:
    'Seurat',
    sans-serif;
  font-size: 1rem;
  transition: .25s;
  cursor: pointer;
}

.prev-button:hover,
.next-button:hover {
  transform: scale(1.2);
  transition: .25s;
}
</style>
