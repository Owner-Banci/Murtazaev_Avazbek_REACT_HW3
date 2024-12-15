// src/App.tsx
import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, AppBar, IconButton, Typography, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProductListPage from './pages/ProductListPage';

const drawerWidth = 240;

const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Warehouse Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }}
      >
        <ProductListPage />
      </Box>
    </Box>
  );
};

export default App;