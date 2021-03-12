import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from "@material-ui/core";
import Home from "@material-ui/icons/Home";

//components
import Label from "./Label";

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
  },
  header: {
    backgroundColor: "#337ab7",
    textAlign: "center",
  },
  subheader: {
    color: "#fff",
  },
  fright: {
    float: "right",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
  },
});
function ReportCard({ title, count, body }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        classes={{
          subheader: classes.subheader,
        }}
        subheader={title}
      ></CardHeader>
      <CardContent>
        {body ? (
          body
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4} className={classes.icon}>
              <Home color="secondary" fontSize="Large" />
            </Grid>
            <Grid item xs={8} sm={8}>
              <Label>Total: </Label>
              <Label>{count}</Label>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}

export default ReportCard;
