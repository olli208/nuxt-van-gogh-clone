<!-- Please remove this file from your project -->
<template>
  <div class="detail-page">
    <div class="detail-page-image-container">
      <img :alt="artObject.title" :src="artObject.webImage?.url" />
      <div class="detail-page-image-plaque">{{ artObject.principalMaker }}</div>
    </div>
    <div class="detail-page-content">
      <h1>{{ artObject.title }}</h1>
      <p>{{ artObject.plaqueDescriptionDutch }}</p>
      <!-- <p>{{ artObject.description }}</p> -->
      <!-- <p>{{ artObject.principalMakers.name }}</p>
      <p>{{ artObject?.principalMakers[].placeOfBirth }}</p>
      <p>{{ artObject?.principalMakers?.placeOfBirth }}</p> -->
      <div class="swatch-container">
        <div
          v-for="(color, index) in artObject?.colors"
          :key="index"
          class="swatch"
          :style="{ background: color.hex }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionDetail",
  async asyncData({ params, $config }) {
    const key = $config?.key; // todo fix before making public
    const { artObject } =
      (await fetch(
        `https://www.rijksmuseum.nl/api/nl/collection/${params.id}?key=${key}`
      ).then((res) => res.json())) || {};
    console.log("get collection", { artObject });

    return {
      artObject,
    };
  },
};
</script>

<style>
h1 {
  margin-top: 0;
  margin-top: 3.55;
}

p,
span {
  line-height: 1.55;
}

.detail-page {
  display: flex;
  overflow: hidden;
  flex-direction: row;
  height: calc(100vh - 6.875rem);
  padding-top: 1.52vmin;
  padding-bottom: 4vmin;
}

.detail-page-image-container {
  position: relative;
  overflow: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 69%;
}

.detail-page-image-container img {
  width: 100%;
}

.detail-page-image-plaque {
  position: sticky;
  bottom: 0;
  padding-bottom: 1.25rem;
  padding-top: 2.45rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(0, 0, 0, 0.73)
  );
  font-weight: 500;
  font-size: 0.95rem;
}

.detail-page-content {
  padding: 4.5vmin;
}

.swatch-container {
  margin-top: 3.55rem;
  display: flex;
}

.swatch {
  height: 12px;
  flex-grow: 1;
}
</style>
