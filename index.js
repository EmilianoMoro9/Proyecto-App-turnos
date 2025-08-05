import { log } from "console";
import express from "express";
import fs from "fs";
import { json } from "stream/consumers";


const app = express();
const readJSONfFile = () => {
    try {
        const data = fs.readFileSync("db.json");
        // const libros = JSON.parse(data);
        return JSON.parse(data) ;
        
        
        
    } 
    catch (error) {
        console.log("error leyendo el archivo", error);
        
    }
    
};
readJSONfFile();
const writeData = (data) => {
    try {
        fs.writeFileSync("db.json", JSON.stringify(data));
        console.log("archivo escrito correctamente");
    }
        
     catch (error) {
        console.log("error escribiendo el archivo", error);
        
    } }   ;


app.get("/libros", (req, res)=> {
    const data = readJSONfFile();
    res.json(data);
    
})
app.get("/", (req, res)=> {
    res.send("Juan putito")
    console.log("bienvenido a mi primer API");
    
})

app.listen(3000, ()=> {
    console.log("servidor escuchando en el puerto 3000");
    
})


