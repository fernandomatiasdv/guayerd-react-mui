import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  boton100ancho: {
    width: "100%",
    height: "90px",
  },
}));

export default function Grilla() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Button
            color="primary"
            variant="outlined"
            className={classes.boton100ancho}
          >
            BOTON1
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Button>BOTON1</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <p>
            Se cree ampliamente que la historia de Lorem Ipsum se origina con
            Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum.
            Esta obra filosófica, también conocida como En los extremos del bien
            y del mal, se dividió en cinco libros. El Lorem Ipsum que conocemos
            hoy se deriva de partes del primer libro Liber Primus y su discusión
            sobre el hedonismo, cuyas palabras habían sido alteradas, añadidas y
            eliminadas para convertirlas en un latín sin sentido e impropio. No
            se sabe exactamente cuándo el texto recibió su forma tradicional
            actual. Sin embargo, las referencias a la frase "Lorem Ipsum" se
            pueden encontrar en la Edición de la Biblioteca Clásica Loeb de 1914
            del De Finibus en las secciones 32 y 33. Fue en esta edición del De
            Finibus en la que H. Rackman tradujo el texto. El siguiente
            fragmento se selecciona de la sección 32:
          </p>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Container>
            <p>
              Se cree ampliamente que la historia de Lorem Ipsum se origina con
              Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum.
              Esta obra filosófica, también conocida como En los extremos del
              bien y del mal, se dividió en cinco libros. El Lorem Ipsum que
              conocemos hoy se deriva de partes del primer libro Liber Primus y
              su discusión sobre el hedonismo, cuyas palabras habían sido
              alteradas, añadidas y eliminadas para convertirlas en un latín sin
              sentido e impropio. No se sabe exactamente cuándo el texto recibió
              su forma tradicional actual. Sin embargo, las referencias a la
              frase "Lorem Ipsum" se pueden encontrar en la Edición de la
              Biblioteca Clásica Loeb de 1914 del De Finibus en las secciones 32
              y 33. Fue en esta edición del De Finibus en la que H. Rackman
              tradujo el texto. El siguiente fragmento se selecciona de la
              sección 32:
            </p>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
