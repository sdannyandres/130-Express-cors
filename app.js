const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.get('/', (req, res) => {
    res.send('respondo desdel el server cors')
})

app.listen(3345)