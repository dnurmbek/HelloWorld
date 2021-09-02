const { response } = require('express');
const express = require('express'); //öeldakse et selle rakenduse töös ma vajan "neid" faile. vahemälus luuakse "express" nimega muutuja ja ta salvestab lingid pakettidele ehk kõigil ülejäänud expres failidele.
const app = express(); //meie rakednus toetub expressile. initsialiseerime expressi. paneme muutujad valmis mälus millele toetuvad kõik ülejäänud failid.


app.get('/',(req,response)=>{ // need andmed mida brauser saadadb siis kui kasutaja saadab päringu veebilehe aadressile.
    console.log(req); // kirjutab meile terminalis tagasiside
    response.send('Hello World!')
});// ütlen mis ma teen nende päringutega mis tulevad kaldkriipsust

app.get('/contact',(req,response)=>{ // need andmed mida brauser saadadb siis kui kasutaja saadab päringu veebilehe aadressile.
    console.log(req); // kirjutab meile terminalis tagasiside
    response.send('Telefon: 56806851')
});// ütlen mis ma teen nende päringutega mis tulevad antud URL-ilt

app.get('*',(req, response)=>{
    response.send('404 Not found')
})

app.listen(3000, function(){
console.log("Server is running on 3000");
})