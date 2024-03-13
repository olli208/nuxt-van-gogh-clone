<template>
  <div class="main-nav">
    <nav class="main-navigation">
      <div>
        <div role="menu" class="main-navigation-desktop">
          <ul class="main-navigation-list">
            <li>
              <button
                type="button"
                aria-label="Zoeken"
                class="main-navigation btn-icon"
              >
                <img src="~assets/search-icon.svg" />
              </button>
            </li>
            <li role="none">
              <nuxt-link
                to="/"
                type="button"
                role="menuitem"
                aria-haspopup="true"
                class="main-navigation-desktop-item btn-link"
              >
                <button
                  type="button"
                  role="menuitem"
                  aria-haspopup="true"
                  class="main-navigation-desktop-item btn-link"
                >
                  <span>Home</span>
                </button>
              </nuxt-link>
            </li>
            <li role="none">
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                class="main-navigation-desktop-item btn-link"
              >
                <span>Verhalen</span>
              </button>
            </li>
            <li role="none">
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                class="main-navigation-desktop-item btn-link"
              >
                <span>Rijkssttudio</span>
              </button>
            </li>
          </ul>

          <ul class="main-navigation-list">
            <li role="none">
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                class="main-navigation-desktop-item btn-link"
              >
                <span>Shop</span>
              </button>
            </li>
            <li role="none">
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                class="main-navigation-desktop-item btn-link"
              >
                <span>Tickets</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheMainNav",
};
</script>

<style scoped>
.main-navigation-desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6.875rem;
  padding: 1.75rem;
}

.main-navigation-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: #fff;
}

.main-navigation-list button {
  background: none;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-right: 1rem;
}

.btn-icon > * {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(28deg)
    brightness(102%) contrast(102%);
}
</style>
