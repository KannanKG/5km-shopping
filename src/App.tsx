import './App.css';
import React from 'react';
import {Box, BottomNavigation, Paper, BottomNavigationAction, Badge} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Checklist from './components/checklist';
// import Fab from '@mui/material/Fab';
// import { styled } from '@mui/material/styles';
import Search from './components/search';


// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const actions = [
  //   { icon: <ShoppingCartOutlinedIcon />, name: 'Shopping' },
  //   { icon: <FormatListBulletedOutlinedIcon />, name: 'ToDo' }
  // ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100vw',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <div style={{ marginBottom: "55px"}}>
        {
          value === 0 ? <Checklist /> :
          value === 1 ? <Search /> :
          value === 2 ? <>Tab 2</> :
          value === 3 ? <>Tab 3</> :
          <>Tab 4</>
        }
      </div>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ReceiptLongOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Checklist
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" aria-label="search" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar> */}
      
      {/* <SpeedDial
        ariaLabel="Checklist"
        sx={{ position: 'fixed', bottom: 90, right: 15 }}
        icon={<AddIcon fontSize='small' />}
        onClose={() => setOpen(!open)}
        onOpen={() => setOpen(!open)}
        open={open}
        FabProps={{size: 'small'}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => setOpen(!open)}
          />
        ))}
      </SpeedDial> */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          sx={{ alignContent: "flex-start" }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} sx={{ minWidth: "0"}} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} sx={{ minWidth: "0"}} />
          {/* <BottomNavigationAction label="" icon={
            <StyledFab color="secondary" aria-label="add">
              <AddIcon />
            </StyledFab>
          } disableRipple sx={{ minWidth: "0"}} /> */}
          <BottomNavigationAction label="Notification" icon={
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          } sx={{ minWidth: "0"}} />
          <BottomNavigationAction label="Settings" icon={<PersonOutlinedIcon />} sx={{ minWidth: "0"}} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
