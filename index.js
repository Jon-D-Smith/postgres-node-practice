const express= require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({info : 'Node.js, Express, and Postgres API'})
})

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})