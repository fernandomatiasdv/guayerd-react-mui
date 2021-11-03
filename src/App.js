import { Boton, Titulos } from "./components";

export default function App() {
  return (
    <>
      <Titulos variante="h4" contenido="Este es un titulo" />
      <Boton variante="error" contenido="Es un error" />
      <Boton variante="" contenido="No es un error" />
    </>
  );
}
