import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedArtObjects: [{}]
    },
    mutations: {
      setArtObjects(state, artObjects) {
        state.loadedArtObjects = artObjects
      }
    },
    actions: {
      async nuxtServerInit({commit}, {$http, $config}) {
        const key = $config?.key; // todo fix before making public
        const { artObjects } = await $http.get(
            `https://www.rijksmuseum.nl/api/nl/collection?key=${key}&toppieces=True&type=schilderij`
          ).then((res) => res.json());
            
        commit("setArtObjects", artObjects);
      },
      setArtObjects(vuexContext, artObjects) {
        vuexContext.commit('setArtObjects', artObjects)
      }
    },
    getters: {
      loadedArtObjects(state) {
        return state.loadedArtObjects
      }
    }
  })
}

export default createStore