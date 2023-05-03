const webpush = require('web-push')
const express = require('express')
const body_parser = require('body-parser')
const path = require('path')
const pubkey = "BDS5CeDiIo0CJABbTM_gAc1j4fzNyC0K32vHC5WSrOAwQcgFXctxfMpgb7zwiWVy7dcb9n9Bb04C3q8X7KfmQfM"
const pvtkey = "Gk2_nBf4Qt1ZRNXz1RdoGdJHOCqXaxHv38dXP3AAsEE"
webpush.setVapidDetails('mailto:san@localhost', pubkey, pvtkey)
const app = express()
app.use(body_parser.json({ extended: true }))
app.post('/subscribe', (req, res) => {
    const subscription = req.body
    res.status(201).json({})
    const payload = JSON.stringify({ title: 'Demo' })
    webpush.sendNotification(subscription, payload).catch(err => console.error(err))
})
app.get('/push',(req,res)=>{
    const subscription = req.body
    res.status(201).json({})
    const payload = JSON.stringify({ title: 'Demomaual' })
    webpush.sendNotification(subscription, payload).catch(err => console.error(err))
})
app.use(express.static(path.join(__dirname, 'static')))
app.listen((3000), () => {
    console.log('Running at http://localhost:3000');
})