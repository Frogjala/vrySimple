let message = "Hello!";
console.log(message);

const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    let rando = (Math.random() + 1).toString().substring(3);
    res.status(200).send("Server is up and running.. " + rando);

});

app.listen(3000, ()=>{

    let r = (Math.random() + 1).toString().substring(3);
    console.log(r);
    console.log('App is running on port 3000');
})
