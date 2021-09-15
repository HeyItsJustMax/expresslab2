
const express = require("express")
const app = express()
const port = 3000

// greeting route
app.get('/greeting/:name', (req, res) => {
    res.send("Hello, " + req.params.name + "! Great to see you!")
})

app.listen(port, () =>{
    console.log(`this is port ${port}`)
})