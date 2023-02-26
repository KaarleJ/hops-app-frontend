import { Box, Paper } from '@mui/material';
import { PropsWithChildren, useEffect, useState } from 'react';

const Page = (props: PropsWithChildren) => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleSize = () => {
      const windowHeight = window.innerHeight;
      setHeight(windowHeight - 200);
    };

    handleSize();

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return (
    <Box
      sx={{
        width: '90%',
        mt: 2,
      }}
    >
      <Paper elevation={24} square>
        <Box
          sx={{
            height,
            textAlign: 'center',
            padding: 5,
          }}
        >
          {props.children}
        </Box>
      </Paper>
    </Box>
  );
};

export default Page;
