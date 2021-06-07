duf = 'nao'
const express = require('express');
const router = express.Router();
const fs = require("fs")

router.get("/",(req,resp,positionop45) => {
const users =  JSON.parse(fs.readFileSync('./database/json/usersenhas.json'))
const ubt =  JSON.parse(fs.readFileSync('./database/json/usersenhas.json'))
const userst = JSON.parse(fs.readFileSync('./database/json/users.json'))
const treco = req.query.numero 
const snha = len => {
let password = ''
do{
password += Math.random().toString(36).substring(2) 
}while(password.lenght <= len )
senha = password.substring(0, len)
return senha

}
senha = snha(8)
Object.keys(userst).forEach((i) => {
positionop45 = false
                if (userst[i].numero === String(treco)) {
                    duf = 'simm'
                     } 
  }) 
const bot =  req.query.pass
let ghj = 'lop'
if (duf === 'simm') {
Object.keys(ubt).forEach((i) => {

                if (ubt[i].numero === String(treco)) {
                position45d = i
                   ghj = '555'
                  if (bot === "44"){ 
                  ubt[position45d].pass += ''
                ubt[position45d].pass = req.query.new
                
                fs.writeFileSync('./database/json/usersenhas.json', JSON.stringify(ubt))
                  }
                     } 
  }) }

 if (ghj === 'lop' && duf === 'simm'){
 const ups = {numero: treco, pass: senha }
                                                users.push(ups)
						fs.writeFileSync('./database/json/usersenhas.json', JSON.stringify(users))
						resp.status(201).send({
						"senha":`${senha}`
						})
 }
else {

Object.keys(users).forEach((i) => {
positionop45 = false
                if (users[i].numero === String(treco)) {
                   positionop45 = i
                   duf = 'sim'
                    resp.status(201).send({
						"senha":`${users[i].pass}`
						})
                   console.log(`o numero digitado foi ${treco}`)
                     } 
  }) 
  
  if (duf = 'nao'){
  resp.status(404).send({
  "Mensagen":"Não encontrado"
  })
  }
  }
   }); 
         
module.exports = router;
