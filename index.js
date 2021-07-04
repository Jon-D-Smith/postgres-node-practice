const express= require("express")
const app = express()
const PORT = 3000
const db = require('./queries')

app.use(express.json())

app.get('/', (req, res) => {
    res.json({info : 'Node.js, Express, and Postgres API'})
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})