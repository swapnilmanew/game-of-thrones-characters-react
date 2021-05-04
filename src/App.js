import React, { useEffect, useState } from "react";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import "./styles.css";
const useStyle = makeStyles({
  media:{
    height:240,
  }
  ,
  root:
  {
    flexGrow : 1
  }
  , title:
  {
    marginTop:30,
    marginBottom:30,
    fontWeight:"bold"
  }
})

export default function App() {

  const [apiData, setApiData] = useState([]);

  const getData =async()=>
  {
    const data = await fetch("https://thronesapi.com/api/v2/Characters");
    const json = await data.json();
    console.log(json);
    setApiData(json);
  }

  useEffect(()=>
  {
    getData();
  },[]);
  const classes = useStyle();
  return (
   <>

   <Container>
   
     <Typography align="center" variant="h4" className={classes.title}>
      Game of Thrones Characters
     </Typography>
     <Grid container  justify="center" spacing={4}>
     {
       apiData.map((got)=>
       {
         return(<>
          <Grid item xs={12} sm={5} md={4} >
        <Card>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image={got.imageUrl}
         />
         <CardContent>
          <Typography variant="h5" align="center" gutterBottom component="h5">{got.fullName}</Typography>
        
         </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
         </>);
       })
     }
     </Grid>
   </Container>
   </>  
  );
}
