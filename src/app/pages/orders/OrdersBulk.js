import React, { useState } from "react";
import { makeStyles, Paper, Grid, Button, Typography, Checkbox, Chip, Select, InputLabel, FormControl, TextField, OutlinedInput, InputAdornment, Grow, ClickAwayListener, MenuList, MenuItem, Popper } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFormLabel-root": {
      transform: "translate(25px, 8px) scale(1)",
    },
    "& .MuiOutlinedInput-input": {
      padding: "10.5px 100px",
    },
    "& .MuiChip-root ": {
      borderRadius: "2px;",
      margin: "4px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  select: {
    padding: "8.5px 58px",
  },
  color: {
    backgroundColor: "rgb(220, 0, 78)",
  },
  chip: { padding: "20px 40px", backgroundColor: "#ededf2", marign: "5px" },
}));

export default function OrdersBulk() {
  const classes = useStyles();
  const [startDate, setStateDate] = useState(moment().format("ll"));
  const [endDate, setEndDate] = useState(moment().format("ll"));
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const handleCallback = (start, end, label) => {
    console.log(moment(start._d).format("ll"), end, label);
    setStateDate(moment(start._d).format("ll"));
    setEndDate(moment(end._d).format("ll"));
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid style={{ display: "flex", alignItems: "center" }} item xs={1}>
            <Typography variant="h4">Orders</Typography>
          </Grid>
          <Grid item xs={11}>
            <Grid style={{ padding: "14px", margin: "15px" }}>
              <Grid container style={{ alignItems: "center" }}>
                <Grid xs={9}>
                  <Typography>Orders from Oberio suppliers have been found.</Typography>
                  <Typography>Save time by processing up to 1000 orders at once.</Typography>
                </Grid>

                <Grid xs={3}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                      native
                      classes={{
                        outlined: classes.select,
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ backgroundColor: "rgb(226 226 228) " }}>
            <Grid style={{ padding: "8px" }}>
              <Grid container style={{ alignItems: "center" }}>
                <Grid container xs={9}>
                  <Grid xs={6}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                      <OutlinedInput id="outlined-adornment-amount" />
                    </FormControl>
                  </Grid>
                  {/* <Grid xs={8}> */}
                  <Chip variant="default" size="medium" label="Filter" className={classes.chip} />
                  <Chip variant="default" size="medium" label="Export" className={classes.chip} />
                  {/* </Grid> */}
                </Grid>

                <Grid xs={3}>
                  <DateRangePicker initialSettings={{ startDate: "1/1/2014", endDate: "3/1/2014" }} onCallback={handleCallback}>
                    <Chip label={`${startDate} - ${endDate}`} style={{ padding: "22px 45px", fontSize: "1em", backgroundColor: "#ededf2" }} />
                  </DateRangePicker>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid style={{ padding: "8px", margin: "8px" }}>
              <Grid container style={{ alignItems: "center" }}>
                <Grid container xs={12}>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                      native
                      classes={{
                        outlined: classes.select,
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                      native
                      classes={{
                        outlined: classes.select,
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                      native
                      classes={{
                        outlined: classes.select,
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                    <Select
                      native
                      classes={{
                        outlined: classes.select,
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={7}>
                  <Grid container style={{ alignItems: "center" }} spacing={1}>
                    <Grid item xs={6} sm={6}>
                      <Grid container style={{ alignItems: "center" }}>
                        <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
                        <Typography>Order</Typography>
                        <Typography color="primary">#1011 03.16.2020</Typography>
                        <Typography>$99.98 CAD</Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ alignItems: "center" }} item xs={6} sm={6}>
                      <Chip size="small" label="Paid" style={{ backgroundColor: "#29a051", margin: "10px", padding: "0 20px 0 20px", color: "#fff" }} />
                      <Chip size="small" label="Unfulfilled" style={{ backgroundColor: "#ffbe4a", color: "#fff" }} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container style={{ alignItems: "center" }} item xs={6} sm={2}>
                  <Typography>Coustmer: Abhishek</Typography>
                </Grid>
                <Grid container style={{ alignItems: "center" }} item xs={6} sm={3}>
                  <Typography>Shop name</Typography>
                </Grid>
              </Grid>
              {[1, 2].map((e) => (
                <>
                  <Grid container>
                    <Grid container item xs={6} sm={5} style={{ alignItems: "center" }}>
                      <Chip size="small" label="To Order" color="danger" style={{ backgroundColor: "#ef6aaf", margin: "10px", color: "#fff" }} />
                      <Typography>Coustmer: Abhishek</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography>All Order No:</Typography>
                    </Grid>
                    <Grid container xs={6} sm={4}>
                      <Button ref={anchorRef} aria-controls={open ? "menu-list-grow" : undefined} aria-haspopup="true" onClick={handleToggle} style={{ backgroundColor: "#ededf2", margin: "5px" }}>
                        More Actions <KeyboardArrowDownIcon />
                      </Button>
                      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                          <Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                                  <MenuItem onClick={handleClose}>My account</MenuItem>
                                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                      <Button style={{ backgroundColor: "#e20075", margin: "5px" }}>Order Product</Button>
                    </Grid>
                  </Grid>
                  <Grid style={{ margin: "8px" }} variant="outlined">
                    <Grid container style={{ alignItems: "center" }}>
                      <Grid container style={{ alignItems: "center" }} item xs={6} sm={3}>
                        {/* <Grid></Grid> */}
                        <Grid style={{ border: "1px solid #000", padding: "10px", margin: "10px" }}>hjhj</Grid>
                        <Grid>
                          <Typography color="primary">amazing organized Cable</Typography>
                          <Typography>amazing organized Cable</Typography>
                        </Grid>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        United States / for iPhone 0.9m
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        No Tracking Number
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        1 * 40.99 CAD
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>

          <Grid style={{ marginTop: "20px" }} item xs={6} sm={12}>
            <Typography>Notes</Typography>
            <Grid style={{ marginLeft: "10px" }}>
              <Typography>1. An example of rendering multiple Chips from an array of values.</Typography>
              <Typography>2. An example of rendering multiple Chips from an array of values.</Typography>
              <Typography>3. An example of rendering multiple Chips from an array of values.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
