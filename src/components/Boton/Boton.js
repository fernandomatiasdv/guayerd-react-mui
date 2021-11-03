import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
//import { makeStyles } from "@material-ui/core/styles";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
*/
export default function Boton({ variante, contenido }) {
  const [colorBoton, setColorBoton] = useState("primary");
  useEffect(() => {
    if (variante === "error") {
      setColorBoton("secondary");
    } else {
      setColorBoton("primary");
    }
  }, []);
  //  const classes = useStyles();

  return <Button color={colorBoton}>{contenido}</Button>;
}
