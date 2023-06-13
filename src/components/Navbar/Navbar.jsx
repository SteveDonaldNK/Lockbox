import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './styles.css';
import { logo } from '../../constants/images';
import { Stack } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px */

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [elevation, setElevation] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      isTop ? setElevation(0) : setElevation(2)
      setIsScrolled(!isTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className='logo' src={logo} alt="" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" elevation={elevation} className={isScrolled ? 'appbar scrolled' : 'appbar'}>
        <Toolbar className='toolbar' sx={{padding: "0 !important"}}>
          <img className='logo' src={logo} alt="lock box" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon className={isScrolled ? 'appbar-toggler scrolled' : 'appbar-toggler'} />
          </IconButton>
          <Stack direction='row' justifyContent='space-between' sx={{ display: { xs: 'none', sm: 'flex'}, flexBasis: {sm: '50%', md: '25%'} }}>
            {navItems.map((item) => (
              <Link href='#' underline='none' className='appbar-link' key={item} sx={{ color: '#fff' }}>
                {item}
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}