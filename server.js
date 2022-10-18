const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) =>
 res.sendFile(__dirname + '/index.html'))

app.get('/', (req, res) => {/*...*/})
app.post('/qotes', (req, res) => {/*...*/})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


