import Page from "./Page";
import Calendar from './Calendar';
import { Typography, Button, Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from "react";

const Hops= () => {
  const [ year, setYear ] = useState<number>(0)

  useEffect(() => {
    const date = new Date();
    if (date.getMonth() < 7 ) {
      setYear(date.getFullYear());
    } else if (date.getMonth() >= 7 ) {
      setYear(date.getFullYear()+1);
    }
  },[])

  return (
    <Page>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Button variant='text' onClick={() => setYear(year-1)}>
          <ArrowBackIosIcon/>
        </Button>
        <Typography variant='h3' color='black' mb={2}> {year-1}-{year} </Typography>
        <Button variant='text' onClick={() => setYear(year+1)}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      <Calendar year={year.toString()}/>
    </Page>
  );
};

export default Hops;