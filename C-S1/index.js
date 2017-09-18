'user strict'

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Gem = require('./models/gemproduct');
mongoose.set('debug', true);
const app = express()
const port = process.env.PORT || 3001
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
/*app.get('/api/product', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion ${err}` })
        if (!products) return res.status(404), send({ message: `No existen los productos` })
        res.status(200).send({ products });
    })*/
app.get('/api/gemproduct', (req, res) => {
    Gem.find({}, (err, gems) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion ${err}` })
        if (!gems) return res.status(404), send({ message: `No existen las gemas` })
        res.status(200).send({ gems });
    })
})
/*app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    Gem.findById(productId, (err, gems) => {
        if (err) return res.status(500).send({ message: `Error al realizr la peticion ${err}` })
        if (!product) return res.status(404).send({ message: `la gema no existe` })
        res.send(200, { products });
    })*/
app.get('/api/gemproduct/:productId', (req, res) => {
    let productId = req.params.productId
    Gem.findById(productId, (err, gems) => {
        if (err) return res.status(500).send({ message: `Error al realizr la peticion ${err}` })
        if (!gem) return res.status(404).send({ message: `la gema no existe` })
        res.send(200, { gems });
    })
})
/*app.post('/api/product', (req, res) => {
    console.log(req.body)
    let product = new Product()
    product.name = req.body.name;
    product.images = req.body.images;
    product.price = req.body.price;
    product.description = req.body.description;
    product.stock = req.body.stock;
    product.disscounts = req.body.disscounts;

    product.save((err, productStored) => {
        if (err) req.status = (500).send({ message: `Error al salvar el producto en la BD: ${err}` })
        res.status(200).send({ product: productStored })

    })*/
app.post('/api/gemproduct', (req, res) => {
    console.log(req.body)
    let gem = new Gem()
    gem.name = req.body.name;
    gem.images = req.body.images;
    gem.price = req.body.price;
    gem.description = req.body.description;
    gem.stock = req.body.stock;
    gem.disscounts = req.body.disscounts;
    gem.reviews.stars = req.body.stars;
    gem.reviews.comments = req.body.comments;
    gem.reviews.author = req.body.author;
    /*product.save((err, gemStored) => {
        if (err) req.status = (500).send({ message: `Error al salvar la gema en la BD: ${err}` })
        res.status(200).send({ gem: gemStored })
 
    })*/
    gem.save((err, gemStored) => {
        if (err) req.status = (500).send({ message: `Error al salvar la gema en la BD: ${err}` })
        res.status(200).send({ gem: gemStored })

    })
})
/*app.put('/api/product/:productId', (req, res) => {

    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({ message: `Error al realizar la petición: ${err}` })

        res.status(200).send({ product: productUpdated })
    })*/
app.put('/api/gemproduct/:productId', (req, res) => {

    let productId = req.params.productId
    let update = req.body
    Gem.findByIdAndUpdate(productId, update, (err, gemUpdated) => {
        if (err) res.status(500).send({ message: `Error al realizar la petición: ${err}` })

        res.status(200).send({ gem: gemUpdated })
    })
})
/*app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` });
        product.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` })
            res.status(200).send({ message: `El producto ha sido eliminado` })
        })
    })*/
app.delete('/api/gemproduct/:productId', (req, res) => {
    let productId = req.params.productId;
    Gem.findById(productId, (err, gem) => {
        if (err) res.status(500).send({ message: `Error al borrar la gema ${err}` });
        gem.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar la gema ${err}` })
            res.status(200).send({ message: `La gema ha sido eliminado` })
        })
    })
})
/*para mandar algo especifico se necesita params*/
/*ap9p.listen (port, () =>{
    console.log(`API REST corriendo en localhost: ${port}`)
})*/
mongoose.connect('mongodb://localhost:27017/shops', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('La conexion con la BD fue exitosa')
    app.listen(port, () => {
        console.log(`API REST corriendo en localhost: ${port}`)
    })

})