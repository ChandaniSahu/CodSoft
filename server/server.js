const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/home',(req,res)=>{
    res.json({msg:'yes'})
})

app.listen(3000,()=>{
 console.log('server is li stening on port 3000')
})