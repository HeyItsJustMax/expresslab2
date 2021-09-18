
const express = require("express")
const app = express()
const port = 3000

// greeting route
app.get('/greeting/:name', (req, res) => {
    res.send("Hello, " + req.params.name + "! Great to see you!")
})

// /tip route
// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     const total = +req.params.total
//     const tipPerc = +req.params.tipPercentage
//     res.send(total + tipPerc)
// })

app.get('/tip/:total/:tipPercentage', (req, res) => {   
    res.send("The tip is $" + ((+req.params.tipPercentage)*.01* (+req.params.total)).toFixed(2));
});

app.listen(port, () =>{
    console.log(`this is port ${port}`)
})