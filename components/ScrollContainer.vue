<template>
  <div>
    <section class="scroll-container-list">
      <article class="card first">
        <div class="card-content">
          <h1>
            Ontdek de kunst en geschiedenis van Nederland in het Rijksmuseum.
            Bewonder de meesterwerken van Rembrandt, Vermeer en Van Gogh.
          </h1>
          <p>Museum bezoeken? Bestel je kaartje online.</p>
        </div>
      </article>
      <article v-for="(object, index) in artObjects" :key="index" class="card">
        <nuxt-link :to="`collection/${object.objectNumber}`">
          <div class="card-image-container">
            <img :alt="object.title" :src="object.webImage.url" />
          </div>
          <div class="card-content">
            <h2>
              {{ object.title }}
            </h2>
            <span>{{ object.principalOrFirstMaker }}</span>
            <span>{{ object.plaqueDescriptionDutch }}</span>
          </div>
        </nuxt-link>
      </article>
      <img
        alt="rijksmuseum logo"
        src="~assets/rijksmuseum.svg"
        class="rijskmuseum-bg-logo"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "ScrollContainer",
  props: {
    artObjects: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
h2 {
  word-wrap: break-word;
  font-weight: 800;
}

p {
  font-weight: 500;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.rijskmuseum-bg-logo {
  top: 0;
  height: 30vh;
  position: absolute;
  z-index: -1;
}

.scroll-container-list {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 6.875rem);
  padding-top: 5.5vmin;
  padding-bottom: 9vmin;
  position: relative;
  overflow-x: auto;
  width: 100%;
}

.card {
  height: 100%;
  min-width: 485px;
  overflow: hidden;
  position: relative;
  margin-left: 4vw;
  border-radius: 0.75rem;
}

.card.first {
  min-width: 40vw;
}

.card:not(.first) {
  box-shadow: 2.2px 2.2px 2.2px rgba(0, 0, 0, 0.02),
    4.3px 4.3px 5.3px rgba(0, 0, 0, 0.028), 7px 7px 10px rgba(0, 0, 0, 0.035),
    12.1px 12.1px 17.9px rgba(0, 0, 0, 0.042),
    25.6px 25.6px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 4.5vmin;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: end;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(0, 0, 0, 0.63)
  );
  height: 50%;
  pointer-events: none;
}

.card-image-container > img {
  position: absolute;
  left: -150%;
  top: -50%;
}

.card-image-container {
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.card-image-container:not(:hover) {
  animation: zoomout 350ms forwards;
}

.card-image-container:hover {
  animation: zoomin 260ms forwards;
}

@keyframes zoomin {
  to {
    transform: scale(1.2);
  }
}

@keyframes zoomout {
  to {
    transform: scale(1);
  }
}
</style>
