import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from "axios";

let store = createStore({
    state() {
      return {
        products: [],
        cart: []
      }
    },
    mutations: {
      SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
      },
      SET_CART: (state, product) => {
        state.cart.push(product)
      },
      REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
      },
      INCREMENT: (state, index) => {
        state.cart[index].quantity++
      },
      DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--
        }
      }
    },
    actions: {
      GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
          method: "GET"
        })
          .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
      },
      ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
      },
      INCREMENT_CART_ITEM({commit}, index) {
        commit('INCREMENT', index)
      },
      DECREMENT_CART_ITEM({commit}, index) {
        commit('DECREMENT', index)
      },
      DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
      }
    },
    getters: {
      PRODUCTS(state) {
        return state.products;
      },
      CART(state) {
        return state.cart;
      }
    }
});

const app = createApp({ /* your root component */ })

app.use(store)

export default store