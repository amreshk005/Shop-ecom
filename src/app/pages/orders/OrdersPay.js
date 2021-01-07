import React from "react";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { Card, Button, Checkbox, Chip, Select, InputLabel, FormControl, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    "& .MuiCard-root": {
      overflow: "hidden",
      boxShadow: "none !important",
    },
    "& .MuiChip-root": {
      borderRadius: "5px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none !important",
  },
  Heading: {
    color: "#FF3333",
    fontWeight: "500",
    fontSize: "1.3rem",
    padding: "10px",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Typography className={classes.Heading}>Order All Products & Order Product Modal</Typography>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom style={{ padding: "20px" }}>
            <ShoppingCartSharpIcon />
            Buy Products
          </Typography>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Card>
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={5}>
                    <Grid container style={{ alignItems: "center" }} spacing={1}>
                      <Grid item xs={6} sm={8}>
                        <Grid container style={{ alignItems: "center" }}>
                          <Typography>Shopify Orders Total:</Typography>
                          <Typography style={{ color: "#FF3333" }}>$99.98 CAD</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container style={{ alignItems: "center", justifyContent: "flex-end" }} item xs={6} sm={5}>
                    <Typography variant="body1">Subtotal: $17.36 Shipping: $12.68</Typography>
                    <Typography style={{ padding: "10px", fontWeight: "400" }}>
                      Total: <span style={{ color: "#ff3333", padding: "10px" }}>$30.04</span>
                    </Typography>
                  </Grid>
                  <Grid container style={{ alignItems: "center" }} item xs={6} sm={2}>
                    <Button variant="contained" color="secondary" style={{}}>
                      Place Order
                    </Button>
                  </Grid>
                </Grid>
                {[1, 2].map((e) => (
                  <>
                    <Grid container>
                      <Grid container item xs={6} sm={5} style={{ alignItems: "center" }}>
                        <Chip size="small" label="To Order" color="white" style={{ backgroundColor: "#e20075", margin: "10px" }} />
                        <Typography>Shipping to United States</Typography>
                      </Grid>
                      <Grid container xs={6} sm={3} style={{ alignItems: "center" }}>
                        <i class="fab fa-shopify" style={{ color: "green", margin: "5px" }}></i>
                        <Typography>Shop Name</Typography>
                      </Grid>
                      <Grid item xs={6} sm={4}></Grid>
                    </Grid>
                    <Card style={{ margin: "8px" }} variant="outlined">
                      <Grid container style={{ alignItems: "center" }}>
                        <Grid container style={{ alignItems: "center" }} item xs={8} sm={6}>
                          {/* <Grid></Grid> */}
                          <Grid style={{ border: "1px solid #000", padding: "10px", margin: "10px" }}>hjhj</Grid>
                          <Grid>
                            <Typography color="primary" style={{ textAlign: "left" }}>
                              amazing organized Cable
                            </Typography>
                            <Typography>Cost: $6.04 Shipping: $3.36 Estimated Delivery: 9-18 Days</Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} sm={1}>
                          <i class="fas fa-shopping-bag" style={{ color: "#FF3333", margin: "5px" }}></i>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                          <Chip size="small" label="OVEDRRIDE" color="danger" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <select id="cars" name="cars" style={{ padding: "0 25px 0 25px" }}>
                            <option value="volvo">Volvo XC90</option>
                            <option value="saab">Saab 95</option>
                            <option value="mercedes">Mercedes SLK</option>
                            <option value="audi">Audi TT</option>
                          </select>
                        </Grid>
                      </Grid>
                    </Card>
                  </>
                ))}
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ margin: "20px" }}>
        <Typography className={classes.Heading}>Order Processing Banner</Typography>
        <Grid container xs={12}>
          <Grid container xs={1}>
            Hello
          </Grid>
          <Grid item xs={7}>
            <Typography>Go make payment on AliExpress</Typography>
            <Grid container justify="space-between" style={{ padding: "10px" }}>
              <Chip avatar={<Avatar>M</Avatar>} label="Orders awaiting Order" variant="outlined" />
              <Chip avatar={<Avatar>M</Avatar>} label="oders succeed" variant="outlined" />
              <Chip avatar={<Avatar>M</Avatar>} label="Orders failed" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container xs={4} justify="flex-end" alignItems="flex-end" style={{ padding: "10px" }}>
            <Button style={{ backgroundColor: "#fff38e", padding: "1px 50px", height: "50px", color: "#364049" }}>Make Payment</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
