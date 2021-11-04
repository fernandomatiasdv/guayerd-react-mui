import {
  BarraNavegacion,
  Boton,
  Contenedor,
  Grilla,
  Titulos,
} from "./components";

export default function App() {
  return (
    <>
      <BarraNavegacion />
      <Contenedor>
        <Titulos variante="h4" contenido="Este es un titulo" />
        <Boton variante="error" contenido="Es un error" />
        <Boton variante="" contenido="No es un error" />
      </Contenedor>
      <Grilla />
    </>
  );
}
