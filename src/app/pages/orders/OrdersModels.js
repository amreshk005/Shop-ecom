import React from 'react';
import { makeStyles, ListItem, ListItemText, TextField, Card, Paper, Grid, Typography , FormControl, InputLabel, Select} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiSelect-outlined.MuiSelect-outlined ":{
        paddingRight: "88px",
        paddingTop: "0px"
    },
    "& .MuiOutlinedInput-root ":{
        margin:" 10px"
    }
 
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function OrderModels() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <Card style={{padding:"15px"}} >

          <Typography style={{color:"#ff3333"}} variant="h5" >Customer Information</Typography>

          <div className={classes.root}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
       <Grid item container style={{marginTop:"10px"}} xs={12} >
           <Grid xs={6}>
               <Typography variant="h5" >Contact Information</Typography>
               <Typography >amreshk005@gmail.com</Typography>
               <Typography >7050009852</Typography>

               <form style={{marginTop:'20px'}} className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-basic" label="CPF Number" variant="outlined" />
</form>
           </Grid>
           <Grid xs={6}>
           <Typography variant="h5" >Shipping Address</Typography>
           <Typography  >khojpura telhara nalanda bihar 801306</Typography>
           </Grid>
           <ListItem button divider>  </ListItem>

       </Grid>
       <Grid container  xs={12} >
       <Grid xs={6} >
            
            </Grid>
            <Grid style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}} container xs={6} >
            <Button  variant="contained" color="#F3F6F9">
  EXPORT
</Button>
<Button variant="contained" color="#F3F6F9">
  CLOSE
</Button>
            </Grid>
       </Grid>
    </div>
          </Card>
          <Grid style={{marginTop:"20px"}}  xs="12">
              <Typography variant="h6" >Notes</Typography>
              <Typography variant="h6" >1. The Export button should say Add CPF #. This CPF number will displayed in customer information under the contact Information section</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
        <Typography style={{color:"#ff3333"}} variant="h5" >Actions when To Order Status</Typography>

        <Grid container xs="12" >
        <Grid style={{display:"flex", justifyContent:"flex-end"}} xs="6" >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
        
        classes={{
            outlined: classes.select
        }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
        </Grid>
        <Grid xs="6" >
        </Grid>
        </Grid>

     
 <Grid xs="6" >

<Card style={{padding:"20px"}} >
    <Typography>Add AliExpress order number Mark as shipped</Typography>
</Card>
 </Grid>

        </Grid>
      </Grid>
    </div>
  );
}