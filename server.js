const express = require("express")






const app = express()

app.get('/yes', (req, res)=>{
    console.log('accessed')
    res.json({
        yes:'yeah'
    })
})



app.listen('3001')
