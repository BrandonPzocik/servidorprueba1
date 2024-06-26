//iniciar el servidor 
const express = require("express")
const bd = require("./bd")
//creamos el servidor 
const app = express(); 
//utilizamos middlewares
app.use(express.json());


//creamos las rutas 
//RUTAS GET
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

//RUTA POST 
//creamos un nuevo alumno 
app.post("/alumnos", (req, res) => {
    const {id, nombre, edad} = req.body 
    const nuevoAlumno = bd.push({id:id, nombre:nombre, edad:edad})
    nuevoAlumno.id = id
    nuevoAlumno.nombre = nombre 
    nuevoAlumno.edad = edad 
    res.json({mensaje: "alumno creado de forma exitosaaaaa"})
})
//RUTA PUT 
//Actualizamos un alumno
app.put("/alumnos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {nombre , edad} = req.body 
    const actualizarAlumno = bd.find( (alumno) => alumno.id === id)
    actualizarAlumno.nombre = nombre 
    actualizarAlumno.edad = edad 
    res.json({mensaje: "se actualizo de forma exitosaaa"})
})
//RUTA DELETE 
//elimanmos un alumno 
app.delete("/alumnos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const obtenerAlumno = bd.find( (alumno) => alumno.id === id)
    const alumnoIndex = bd.indexOf(obtenerAlumno)
    const eliminarAlumno = bd.splice(alumnoIndex, 1)
    res.json({mensaje: "alumno eliminado con exitooooooooooo"})
})
//corremos el servidor en el puerto
app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})