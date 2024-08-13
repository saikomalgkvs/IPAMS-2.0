const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const url = 'mongodb://localhost:27017/IPAMS'
const slotRoutes = require('./routes/slots'); 

app = express()
const PORT = process.env.PORT || 3000;

mongoose.connect(url)

app.use(express.static(path.join(__dirname,'public')));
app.use('/', slotRoutes)

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/scheduler.html'))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});