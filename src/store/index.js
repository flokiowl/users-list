import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    loadUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async loadUsers({ commit }) {
      try {
        await axios
          .get("https://reqres.in/api/users?page=2")
          .then((response) => {
            commit("loadUsers", response.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return (uid) => {
        return state.users.find((user) => user.id == uid);
      };
    },
  },
});
