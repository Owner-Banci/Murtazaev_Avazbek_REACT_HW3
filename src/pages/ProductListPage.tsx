import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Pagination } from '@mui/material';
import ProductCard from '../components/ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  category: string;
  quantity: number;
  description: string;
  image: string;
}

const allProducts: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', quantity: 10, description: 'A powerful laptop', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Chair', category: 'Furniture', quantity: 5, description: 'A comfortable chair', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Shirt', category: 'Clothing', quantity: 20, description: 'A stylish shirt', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Desk', category: 'Furniture', quantity: 7, description: 'A spacious desk', image: 'https://via.placeholder.com/300' },
  { id: 5, name: 'Mouse', category: 'Electronics', quantity: 12, description: 'An ergonomic mouse', image: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Tea', category: 'Food', quantity: 15, description: 'Green tea from Japan', image: 'https://via.placeholder.com/300' },
  { id: 7, name: 'Headphones', category: 'Electronics', quantity: 8, description: 'Noise-canceling headphones', image: 'https://via.placeholder.com/300' },
  { id: 8, name: 'Protein Bars', category: 'Food', quantity: 25, description: 'Healthy protein bars', image: 'https://via.placeholder.com/300' },
  { id: 9, name: 'Jacket', category: 'Clothing', quantity: 6, description: 'A winter jacket', image: 'https://via.placeholder.com/300' },
  { id: 10, name: 'Sofa', category: 'Furniture', quantity: 3, description: 'A comfortable sofa', image: 'https://via.placeholder.com/300' },
  { id: 11, name: 'Book', category: 'Education', quantity: 30, description: 'An interesting book', image: 'https://via.placeholder.com/300' },
];

const PAGE_SIZE = 4;

const ProductListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);
    setDisplayedProducts(paginatedProducts);
  }, [currentPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      <Typography variant="h5" mb={2} fontWeight="bold">
        Product List
      </Typography>
      <Grid container spacing={2}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                name={product.name}
                category={product.category}
                quantity={product.quantity}
                description={product.description}
                image={product.image}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" textAlign="center" width="100%">
            No products available on this page.
          </Typography>
        )}
      </Grid>
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={Math.ceil(allProducts.length / PAGE_SIZE)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ProductListPage;
