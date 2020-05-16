const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/',require('./routes/router'));

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Firing on port ${port}`);
})