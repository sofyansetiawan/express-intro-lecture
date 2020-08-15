const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

// * GET http://localhost:3000/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// * GET http://localhost:3000/about

app.get('/about', (req, res) => {
    res.send('<h2>About Me</h2><hr><h3>Nama saya Sofyan</h3>');
});

// * GET http://localhost:3000/contact/detail (Object)

app.get('/contact/detail', (req, res) => {
    console.log("HALO");
    res.send({ id: 1, name: "Sofyan" });
});

// * GET http://localhost:3000/person (JSON person)

app.get('/person', (req, res) => {
    const dataRaw = fs.readFileSync("./data.json", "utf-8");
    const jsonPerson = JSON.parse(dataRaw);
    res.send(jsonPerson);
});

// * GET http://localhost:3000/person/1 (JSON person)

app.get('/person/:idPerson', (req, res) => {
    console.log(req.params);
    const idPerson = Number(req.params.idPerson);
    const dataRaw = fs.readFileSync("./data.json", "utf-8");
    const jsonPerson = JSON.parse(dataRaw);
    let hasil = {};
    for(let i = 0; i < jsonPerson.length; i++){
        if(jsonPerson[i].id === idPerson){
            hasil = jsonPerson[i];
            break;
        }
    }
    res.send(hasil);
});

// * GET http://localhost:3000/person/1/frendy (JSON person)

app.get('/person/:idPerson/:namePerson', (req, res) => {
    console.log(req.params);
    const idPerson = Number(req.params.idPerson);
    const namePerson = req.params.namePerson;
    const dataRaw = fs.readFileSync("./data.json", "utf-8");
    const jsonPerson = JSON.parse(dataRaw);
    let hasil = {};
    for(let i = 0; i < jsonPerson.length; i++){
        if(jsonPerson[i].id === idPerson && jsonPerson[i].name.toLowerCase() === namePerson.toLowerCase()){
            hasil = jsonPerson[i];
            break;
        }
    }
    res.send(hasil);
});

// * GET http://localhost:3000/person/1/delete/address (JSON person)

app.get('/person/:idPerson/delete/:prop', (req, res) => {
    console.log(req.params);
    const idPerson = Number(req.params.idPerson);
    const prop = req.params.prop;
    const dataRaw = fs.readFileSync("./data.json", "utf-8");
    const jsonPerson = JSON.parse(dataRaw);
    let hasil = "No Action";
    for(let i = 0; i < jsonPerson.length; i++){
        if(jsonPerson[i].id === idPerson){
            delete jsonPerson[i][prop];
            hasil = `berhasil menghapus data ${prop} di ${jsonPerson[i].name}`;
            break;
        }
    }
    res.send({ message: hasil, data: jsonPerson });
});

// * GET http://localhost:3000/persondata?cari=daniel&id=4 (JSON person)

app.get('/persondata/', (req, res) => {
    console.log(req.query); // dinamis / gak perlu bikin route tambahan
    const dataRaw = fs.readFileSync("./data.json", "utf-8");
    const jsonPerson = JSON.parse(dataRaw);
    if(req.query.cari && req.query.id){
        const cari = req.query.cari;
        const id = Number(req.query.id);
        let hasil = "Tidak ditemukan";
        let personFound = {}
        for(let i = 0; i < jsonPerson.length; i++){
            if(jsonPerson[i].name.toLowerCase() === cari.toLowerCase() && jsonPerson[i].id === id){
                personFound = jsonPerson[i];
                hasil = `berhasil menemukan person ${cari}`;
                break;
            }
        }
        res.send({ message: hasil, data: personFound });
    }
    else{
        res.send({ message: "Data Person", data: jsonPerson });
    }
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})