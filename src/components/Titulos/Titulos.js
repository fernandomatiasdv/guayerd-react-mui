import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  colorParrafo: {
    color: "#FFAA00",
    background: theme.palette.primary.dark,
  },
  margenSuperior30: {
    paddingTop: "60px",
    height: "60px",
    width: "100%",
  },
}));

export default function Titulos({ variante, contenido }) {
  const classes = useStyles();
  return (
    <div className={classes.margenSuperior30}>
      <Typography className={classes.colorParrafo} variant={variante}>
        {contenido}
      </Typography>
    </div>
  );
}
