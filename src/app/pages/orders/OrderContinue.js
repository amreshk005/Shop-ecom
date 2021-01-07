import React from "react";
import { makeStyles, Paper, Grid, Typography, Button, TextField, FormControlLabel, Checkbox } from "@material-ui/core/";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .makeStyles-paper-75": {
      textAlign: "left",
    },
    "& .MuiOutlinedInput-input": {
      padding: "13.5px 6px",
    },
    "& .makeStyles-paper-552": {
      textAlign: "left",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

function OrderContinue() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState(!state);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} xs={12}>
        <Paper className={classes.paper}>
          <Grid container xs={12}>
            <Grid item xs={12} sm={5} style={{ margin: "20px" }}>
              <Grid>
                <Typography variant="h5" style={{ color: "#ff3333" }}>
                  Add Order Number
                </Typography>
                <Alert icon={false} severity="info" onClose={() => {}}>
                  Add AliExpress Order number
                </Alert>
                <Typography variant="body2" style={{ padding: "15px" }}>
                  Add AliExpress Order number if you manually ordred items on AliExpress. Learn more about order fullFillment in Option.
                </Typography>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <Grid container spacing={3} xs={12} style={{ justifyContent: "flex-end" }}>
                  <Button variant="contained" color="secondary" style={{ margin: "10px", backgroundColor: "#ff3333" }}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
                    Save
                  </Button>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="h5" style={{ color: "#ff3333" }}>
                  Edit Order Number
                </Typography>
                <Alert icon={false} severity="info" onClose={() => {}}>
                  Edit AliExpress Order number
                </Alert>
                <Typography variant="body2" style={{ padding: "15px" }}>
                  Edit AliExpress Order number if you manually ordred items on AliExpress. Learn more about order fullFillment in Option.
                </Typography>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <Grid container spacing={3} xs={12} style={{ justifyContent: "flex-end" }}>
                  <Button variant="contained" color="secondary" style={{ margin: "10px", backgroundColor: "#ff3333" }}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
                    Save
                  </Button>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="h5" style={{ color: "#ff3333" }}>
                  Delete Order Number
                </Typography>
                <Alert icon={false} severity="info" onClose={() => {}}>
                  Add AliExpress Order number
                </Alert>
                <Typography variant="body2" style={{ padding: "15px" }}>
                  Add AliExpress Order number if you manually ordred items on AliExpress. Learn more about order fullFillment in Option.
                </Typography>
                <Grid container spacing={3} xs={12} style={{ justifyContent: "flex-end" }}>
                  <Button variant="contained" color="secondary" style={{ margin: "10px", backgroundColor: "#ff3333" }}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{ margin: "20px" }}>
              <Grid>
                <Typography variant="h5" style={{ color: "#ff3333" }}>
                  Marked as Shipped
                </Typography>
                <Alert icon={false} severity="info" onClose={() => {}}>
                  Marked as Shipped
                </Alert>
                <Typography variant="body2" style={{ padding: "15px" }}>
                  Supplier: BestStore Store
                </Typography>
                {[1, 2, 3, 4].map((e) => (
                  <Grid container xs={12} style={{ margin: "10px" }}>
                    <Grid xs={2}>
                      <Paper>Hello</Paper>
                    </Grid>
                    <Grid xs={6}>
                      <Typography>Pancake Maker Ring Maker Nonstick East..</Typography>
                    </Grid>
                    <Grid xs={2}>
                      <TextField
                        id="outlined-full-width"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={2} style={{ padding: "15px" }}>
                      <Typography>out of 1</Typography>
                    </Grid>
                  </Grid>
                ))}
                <Grid container xs={12}>
                  <Typography variant="subtitle" style={{ padding: "20px" }}>
                    Tracking Number
                  </Typography>
                  <Grid xs={6}>
                    <TextField
                      id="outlined-full-width"
                      style={{ margin: 8 }}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12}>
                  <FormControlLabel control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label="send notification email" />
                  <Button variant="contained" color="secondary" style={{ margin: "5px", backgroundColor: "#ff3333" }}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" style={{ margin: "5px" }}>
                    Mark as Shipped
                  </Button>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="h5" style={{ color: "#ff3333" }}>
                  Add Note
                </Typography>
                <Alert icon={false} severity="info" onClose={() => {}}>
                  Add Note
                </Alert>
                <Typography variant="body2" style={{ padding: "15px" }}>
                  Note is visible to orebio
                </Typography>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <Grid container spacing={3} xs={12} style={{ justifyContent: "flex-end" }}>
                  <Button variant="contained" color="secondary" style={{ margin: "10px", backgroundColor: "#ff3333" }}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
export default OrderContinue;
