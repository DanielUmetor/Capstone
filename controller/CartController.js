import express from 'express'
import bodyParser from 'body-parser'
import { Carts } from '../model/Carts.js'


const carts = new Carts();

const cartRouter = express.Router()

cartRouter.use(bodyParser.json())

cartRouter.get('/', (req, res) => {
    carts.fetchCarts(req, res)
})

cartRouter.get('/users/:id/carts', (req, res) => {
    carts.fetchuserCarts(req, res)
})

cartRouter.post('/users/:id/cart', (req, res) => {
    carts.fetchaddUserCart(req, res)
})

cartRouter.patch('/users/:id/cart/:id', (req, res) => {
    carts.fetchupdateUserCart(req, res)
})

cartRouter.delete('/users/:id/cart', (req, res) => {
    carts.fetchdeleteItemsCart(req, res)
})

cartRouter.delete('/users/:id/cart/:id', (req, res) => {
    carts.fetchDeleteSpecificItemsinCart(req, res)
})

export {
    cartRouter, express
}

