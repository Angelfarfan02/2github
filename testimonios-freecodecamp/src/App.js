
import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>"TOP 5" PERSONAS MAS RICAS DEL MUNDO</h1>

        <Testimonio
          nombre="Elon Musk"
          imagen="elon"
          cargo="Fundador e ingeniero jefe"
          empresa="Tesla"
          Testimonio="Elon Musk es un programador, físico y empresario multimillonario nacido en Sudáfrica, pero nacionalizado canadiense y norteamericano, fundador de empresas como Paypal, Tesla, SpaceX y Solar City, que fue nombrado el hombre más rico del mundo en 2021."
          pais="(219 mil millones dólares)"
        />
        <Testimonio
          nombre="Jeff Bezos"
          imagen="jeff"
          cargo="fundador"
          empresa="Amazon"
          Testimonio="es por todos sabido eso de que Amazon nació en un garaje en Seattle, comenzó vendiendo libros en Internet y su capital inicial apenas sobrepasaba los 10.000 dólares, pero la historia de la empresa que en 2019 cumplió 25 años es mucho más larga y compleja."
        />

        <Testimonio
          nombre="Steve Ballmer"
          imagen="microsoft"
          cargo="fundador"
          empresa="microsoft"
          Testimonio="Steve Ballmer inauguró la sede de la compañía el 11 de junio de 1980; este más adelante sustituiría a Gates como gerente. La compañía se reestructuró el 25 de junio de 1981 para convertirse en una compañía incorporada en el estado de Washington" />

        <Testimonio
          nombre="larry  "
          imagen="larry"
          cargo="ingeniero en computación "
          empresa="google"
          Testimonio="Google es una firma con una capitalización bursátil de cientos de miles de millones de dólares y una de las empresas más innovadoras del mundo. Varias veces al año renueva su cartera de productos, eliminando unos y poniendo en servicio otros "
          pais="(111 mil millones de dólares)"
        />


        <Testimonio
          nombre="Mark Elliot Zuckerberg"
          imagen="zuckerberg"
          cargo="Ingeniero en Software"
          empresa="Facebook"
          Testimonio="Empresario y programador informático estadounidense. y presidente de la comunidad virtual Facebook, en el año 2008, con veintitrés años de edad, se convirtió en el multimillonario más joven de la lista que publica anualmente creada la revista Forbes" />


      </div>
    </div>
  );
}

export default App;
