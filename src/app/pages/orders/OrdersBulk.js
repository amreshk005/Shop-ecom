import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFormLabel-root":{
        transform: "translate(25px, 8px) scale(1)"
    },
    "& .MuiOutlinedInput-input": {
      padding: "10.5px 100px"
  },
 "& .MuiChip-root ":{
    borderRadius: "2px;",
    margin:"4px"
}


    
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  select: {
    padding: "8.5px 58px"
  },
  color:{
    backgroundColor: "rgb(220, 0, 78)"
  }
}));



export default function OrdersBulk() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      
      <Grid container>
      <Grid style={{display:"flex", alignItems:"center"}} item xs={1}>
          <Typography variant="h4">Orders</Typography>
        </Grid>
        <Grid  item xs={11}>
        <Card style={{padding:"14px", margin:"15px"}} >
        <Grid container style={{alignItems:"center"}} >
        <Grid  xs={9} >
        <Typography>Orders from Oberio suppliers have been found.</Typography>
        <Typography>Save time by processing up to 1000 orders at once.</Typography>

        </Grid>

        <Grid xs={3} >

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

        </Grid>
          
     
        </Card>
        </Grid>



        <Grid  item xs={12}>
        <Card style={{padding:"8px", margin:"8px"}} >
  
        <Grid container style={{alignItems:"center"}} >
        <Grid container    xs={9} >
        <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="secondary"
      />

  <Chip variant="outlined" size="small" label="Basic" />
    <Chip variant="outlined" size="small" label="Basic" />
    </form>

 

        </Grid>

        <Grid xs={3} >

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

        </Grid>
          
     
        </Card>
        </Grid>


        <Grid  item xs={12}>
        <Card style={{padding:"8px", margin:"8px"}} >
  
        <Grid container style={{alignItems:"center"}} >
        <Grid container    xs={12} >
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

     

        </Grid>
          
     
        </Card>
        </Grid>
     
        <Grid item xs={12}>
            { [1,2].map(e => (

        
          <Paper className={classes.paper}>
          <Card>
          <Grid container spacing={3}>
          <Grid item xs={6} sm={7}>
          <Grid container style={{alignItems:"center"}} spacing={1}> 
          <Grid item xs={6} sm={6}>
          <Grid container style={{alignItems:"center"}} >
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
          <Typography >Order</Typography>
          <Typography color="primary">#1011 03.16.2020</Typography>
          <Typography>$99.98 CAD</Typography>
          </Grid>
         
        </Grid>
        <Grid  style={{alignItems:"center"}} item xs={6} sm={6}>
        <Chip size="small" label="Paid"  style={{backgroundColor: "#29a051", margin: "10px", padding: "0 20px 0 20px", color:"#fff"}}/>
        <Chip
        size="small"
        label="Unfulfilled"
        style={{backgroundColor: "#ffbe4a", color:"#fff"}}
      />
        </Grid>
        </Grid>
        </Grid>
        <Grid container style={{alignItems:"center"}} item xs={6} sm={2}>
          <Typography>Coustmer: Abhishek</Typography>
        </Grid>
        <Grid container style={{alignItems:"center"}} item xs={6} sm={3}>
        <Typography>Shop name</Typography>
        </Grid>
      </Grid>
      {[1,2].map(e => (
          <>
      <Grid  container>
      <Grid container item xs={6} sm={5} style={{alignItems: "center"}} >
          <Chip  size="small" label="To Order" color="danger" style={{backgroundColor: "#ef6aaf", margin: "10px", color:"#fff"}}/>
          <Typography>Coustmer: Abhishek</Typography> 
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography>All Order No:</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
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
      <Card  style={{margin:"8px"}} variant="outlined">
          <Grid container style={{alignItems:"center"}} >

          <Grid container style={{alignItems:"center"}} item xs={6} sm={3}>
              {/* <Grid></Grid> */}
              <Grid style={{border:"1px solid #000", padding:"10px", margin:"10px"}}>hjhj</Grid>
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
      </Card>

</>
))}
    </Card>
          </Paper>
              ))}
        </Grid>
      
        <Grid style={{marginTop:"20px"}} item xs={6} sm={12}>
         <Typography>Notes</Typography>
         <Grid style={{marginLeft:"10px"}}>
         <Typography>1. An example of rendering multiple Chips from an array of values.</Typography>
         <Typography>2. An example of rendering multiple Chips from an array of values.</Typography>
         <Typography>3. An example of rendering multiple Chips from an array of values.</Typography>
         </Grid>
       
        </Grid>
      
      </Grid>
    </div>
  );
}

 