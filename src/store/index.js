import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()
const apiURL = 'https://capstone-i0ct.onrender.com/'

// Apply the token to authenticated requests
applyToken(cookies.get('LegitUser')?.token)

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null,
    cart: null
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setCart(state, value) {
      state.cart = value
    },
  },
  actions: {
    // ==== User Actions ====
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}users/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async registerUser(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (token) {
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
          router.push({ name: 'login' })
        } else {
          toast.error(err, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}users/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(err, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(err, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    
    // ==== Product Actions ====
    async fetchProducts(context) {
      try {
        const { results } = await (await axios.get(`${apiURL}products`)).data
        if (results) {
          context.commit('setProducts', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}products/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async addProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}products/add`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async updateProduct(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}products/${payload.prodID}`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async deleteProduct(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}products/${id}`)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },

    // ==== Cart Actions ====
    async fetchCart(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}users/${id}/cart`)).data
        if (result) {
          context.commit('setCart', result)
        } else {
          toast.error(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async addToCart(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}users/${payload.userID}/cart`, payload)).data
        if (msg) {
          context.dispatch('fetchCart', payload.userID)
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async updateCart(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}users/${payload.userID}/cart/${payload.prodID}`, payload)).data
        if (msg) {
          context.dispatch('fetchCart', payload.userID)
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async deleteCartItem(context, payload) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}users/${payload.userID}/cart/${payload.prodID}`)).data
        if (msg) {
          context.dispatch('fetchCart', payload.userID)
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    },
    async deleteCart(context, userID) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}users/${userID}/cart`)).data
        if (msg) {
          context.dispatch('fetchCart', userID)
          toast.success(msg, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
        }
      } catch (e) {
        toast.error(e.message, { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
      }
    }
  }
})
