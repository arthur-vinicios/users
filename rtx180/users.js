const express = require('express');
const router = express.Router();
const fs = require("fs")

router.get("/",(req,resp,positionop45) => {
const users=  JSON.parse(fs.readFileSync('./database/json/users.json'))
const ubt =  JSON.parse(fs.readFileSync('./database/json/ubt.json'))
const treco = req.query.numero
const bot =  req.query.pass
let ghj = 'lop'
Object.keys(ubt).forEach((i) => {

                if (ubt[i] === String(bot)) {
                   ghj = '555'
                   console.log(bot)
                     } 
  }) 

 if (ghj === 'lop' ) return resp.status(503).send({"Mensagen":"Voce Não está altorizado"})
else {
duf = 'nao'
Object.keys(users).forEach((i) => {
positionop45 = false
                if (users[i].numero === String(treco)) {
                   positionop45 = i
                   duf = 'sim'
                    resp.status(201).send(users[positionop45])
                   console.log(`o numero digitado foi ${treco}`)
                     } 
  }) 
  
  if (duf === 'nao'){
  resp.status(404).send({
  "Mensagen":"Não encontrado"
  })
  }
  }
   }); 
         
module.exports = router;
