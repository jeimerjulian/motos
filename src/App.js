import React, { useState } from "react";
 
// function Saludo({nombre, idioma}){
//   return(
//     <h1>Hola estudiante {nombre} su idioma es el {idioma}</h1>
//   )
// }
 
const Saludo = ({nombre, idioma='ES'})=>{
 
  const saludo = idioma === "ES"?`Hola estudiante ${nombre} su idioma es el espaniol`:
  `hello student ${nombre} your language is english`;
 
  return(
    <h1>{saludo}</h1>
  )
}
 
const Boton = () =>{
  const [conteo, actConteo] = useState(0); //hook
  return(
    <div>
      <p>Precionado: {conteo}</p>
      <button onClick={()=>{actConteo(conteo+1)}} >Clic me!</button>
    </div>
  );
}
 
// Saludo.defaultProps={
//   idioma:'ES'
// }
 
function Mensaje(){
  return(
    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  )
}
 
function App() {
  return (
    <div>
      <Saludo nombre="Juliano" idioma="EN"/>
      <Boton />
      <Mensaje />
      <Saludo nombre="Juliano"/>
    </div>
  );
}

 
export default App;