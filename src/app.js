//iniciar el servidor 
const express = require("express")
const bd = require("./bd")
//creamos el servidor 
const app = express(); 
//utilizamos middlewares
app.use(express.json());
app.use(express.text());

//creamos las rutas 

//pagina de inicio 
app.get("/", (req, res) => {
    res.send("Pagina de inicio")
});
//obtenemos todos los alumnos
app.get("/alumnos", (req, res) => {
    res.json(bd)
})
//obtenemos a un alumno por su id 
app.get("/alumnos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const obtenerAlumno = bd.find(alumno => alumno.id === id)
    res.json(obtenerAlumno);
})

//corremos el servidor en el puerto
app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})