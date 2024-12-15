import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';

const Pagination: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <MuiPagination count={10} color="primary" />
    </Box>
  );
};

export default Pagination;