import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../global/images/logo.png"

const pages = [
  { to: "/", label: "Farmácias" },
  { to: "/regpharm", label: "Cadastro Farmácias" },
  { to: "/medications", label: "Medicamentos" },
  { to: "/regmed", label: "Cadastro medicamentos" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt='Logomarca' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({label, to}, idx) => {
                return(
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Link style={{textDecoration: "none", color: "#757575" }} to={to}>{label}</Link>
                </MenuItem>
              )})}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt='Logomarca' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', textDecoration: "none" } }}>
            {pages.map(({label, to}, idx) => (
              <Button
                key={idx}
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', m: 1}}
              >
                <Link style={{textDecoration: "none", color: "white"}} to={to}>{label}</Link>
              </Button>
            ))}
          </Box>
          <Button
                  
                  variant="contained"
                  sx={{ my: 2, color: 'white', display: 'block', m: 1}}
                >
                  Logout
          </Button>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export { Header };
