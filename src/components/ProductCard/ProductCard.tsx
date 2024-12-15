import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip, Zoom, Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
});

interface ProductProps {
  name: string;
  category: string;
  quantity: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, category, quantity, description, image }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title={description} placement="top" TransitionComponent={Zoom}>
        <StyledCard onClick={handleOpen} sx={{ cursor: 'pointer' }}>
          <CardMedia
            component="img"
            height="140"
            image={image || 'https://via.placeholder.com/300'}
            alt={name}
          />
          <CardContent>
            <Typography variant="h6" noWrap>{name || 'No Name Available'}</Typography>
            <Typography color="text.secondary" noWrap>{category || 'No Category'}</Typography>
            <Typography>Quantity: {quantity !== undefined ? quantity : 'N/A'}</Typography>
          </CardContent>
        </StyledCard>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="200"
            image={image || 'https://via.placeholder.com/300'}
            alt={name}
          />
          <Typography>Category: {category}</Typography>
          <Typography>Description: {description}</Typography>
          <Typography>Quantity: {quantity}</Typography>
        </DialogContent>
        <Button onClick={handleClose}>Close</Button>
      </Dialog>
    </>
  );
};

export default ProductCard;