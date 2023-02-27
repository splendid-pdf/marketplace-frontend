/* eslint-disable no-unused-vars */
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  totalProducts: number;
  selectedCount: number;
  spacing?: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent = (
  { totalProducts, selectedCount, spacing, onPageChange }: PaginationProps
) => {
  const pageCount = Math.ceil(totalProducts / selectedCount);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    onPageChange(value);
  };

  return (
    <Stack spacing={spacing}>
      <Pagination 
        count={pageCount} 
        variant="outlined" 
        shape="rounded" 
        page={currentPage} 
        onChange={handlePageChange} 
      />
    </Stack>
  );
};

export default PaginationComponent;