import { Box, Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

const Page = (props: PropsWithChildren ) => {
  return (
    <Box sx={{
      width: '60%',
      marginTop: 2
    }}>
      <Paper elevation={6} square>
        <Box sx={{
          height: 720,
          textAlign: 'center',
          padding: 5
        }}>
          {props.children}
        </Box>
      </Paper>
    </Box>
  );
};

export default Page;