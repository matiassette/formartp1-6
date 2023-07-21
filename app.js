const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))
const PORT = 3030;
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT} `))


//rutas
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})