import {request, response} from 'express';
const express = require("express");

import "./database";
const app = express();

// app.get("/", (request, response) =>{
//     return response.json({
//         "mensagem" : "Teste"
//     });
// })


app.post("/", (request, response) => {
    return response.json({message: "Usuário salva bagarai"});
})


app.listen(3333, () => console.log("Server is running on port 3333"));
