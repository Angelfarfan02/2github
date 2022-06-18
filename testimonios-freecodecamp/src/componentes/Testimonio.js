import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
return (

  <div className="contenedor-Testimonio">
    <img
    className="imagen-Testimonio"
    src={require(`../imagenes/Testimonio-${props.imagen}.jpg`)}
alt="foto de zuckerberg"/>

<div className="contenedor-texto-testimonio">
<p className="nombre-Testimonio">
   <estrong>{props.nombre}</estrong> en 
   <strong>{props.pais}</strong>np</p>
<p className="cargo-Testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
<p className="texto-Testimonio">{props.Testimonio}</p>

</div>
 </div>

    );
}

export default Testimonio;