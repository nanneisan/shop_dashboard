import React from "react";
//components
import Label from "../../components/Label";
import Input from "../../components/Input";
import AppButton from "../../components/Button";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  label: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  row: {
    marginTop: 20,
  },
  btnSave: {
    marginRight: 10,
  },
});

function CityAdd() {
  const classes = useStyles();

  return (
    <div>
      <Label variant="h5">City Entry</Label>
      <Grid container spacing={3} className={classes.row}>
        <Grid item xs={12} sm={3}>
          <Label variant="body1" className={classes.label}>
            City:
          </Label>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Input
            id="filled-full-width"
            variant="outlined"
            size="small"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Label variant="body1" className={classes.label}>
            Delivery Charges:
          </Label>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Input
            id="filled-full-width"
            variant="outlined"
            size="small"
            fullWidth={true}
          />
        </Grid>
        <Grid container alignItems="center" justify="center">
          <div>
            <AppButton
              variant="contained"
              color="primary"
              className={classes.btnSave}
            >
              Save
            </AppButton>
            <AppButton variant="outlined">Cancel</AppButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CityAdd;
