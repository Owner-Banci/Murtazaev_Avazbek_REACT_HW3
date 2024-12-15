import React, { useState } from 'react';
import { Drawer, Box, TextField, Checkbox, FormControlLabel, Button, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const [filters, setFilters] = useState({ name: '', available: false, category: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name!]: value }));
  };

  const handleApply = () => {
    console.log('Filters applied:', filters);
    handleDrawerToggle();
  };

  return (
    <Drawer
      variant="persistent"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          top: 64, 
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <Box p={2}>
        <TextField
          label="Product Name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          fullWidth
          margin="dense"
        />
        <FormControlLabel
          control={<Checkbox name="available" checked={filters.available} onChange={handleFilterChange} />}
          label="Only Available Items"
        />
        <Select
          name="category"
          value={filters.category}
          onChange={handleSelectChange}
          displayEmpty
          fullWidth
          margin="dense"
        >
          <MenuItem value="">Category</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="furniture">Furniture</MenuItem>
          <MenuItem value="clothing">Clothing</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleApply} fullWidth>Apply</Button>
        <Button variant="outlined" color="secondary" onClick={handleDrawerToggle} fullWidth>Close</Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
