import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link as _Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import GppGoodIcon from '@mui/icons-material/GppGood';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PowerIcon from '@mui/icons-material/Power';
import TuneIcon from '@mui/icons-material/Tune';
const drawerWidth = 240;

function DashboardDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const items = [
    {
        name: "Dashboard",
        icon: <PersonIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Security setting",
        icon: <GppGoodIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Identification",
        icon: <BadgeIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Payment",
        icon: <MonetizationOnIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Referral",
        icon: <PersonAddIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Reward Center",
        icon: <ConfirmationNumberIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Task Center",
        icon: <AssignmentIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "API Management",
        icon: <PowerIcon fontSize='small' />, 
        url: '/dashboard/security'
    },
    {
        name: "Settings",
        icon: <TuneIcon fontSize='small' />, 
        url: '/dashboard/security'
    },

]

  const drawer = (
    <div>
      <Divider />
      <List>
        {
          items.map((link, idx) => {
            return <ListItem key={link.name} disablePadding sx={{
              ".Mui-selected": {
                  backgroundColor:"#161515",
                  position:'relative',
                  fontSize: "16px",
                  color:"var(--white)",
                  "&::after" :{
                      position:'absolute',
                      content:`""`,
                      top:0,
                      left:0,
                      height:'100%',
                      width:'2px',
                      backgroundColor:'var(--white)'
                  
                  }
              }
            }}>
            <ListItemButton selected={idx === 1} >
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <Link component={_Link} href={link.url} color="#fff">
                <ListItemText primary={link.name} /> 
              </Link>
            </ListItemButton>
          </ListItem>
          })
        }
        

        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      
      sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 }, }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none', height: "100%" },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 60, position: 'sticky', height: "100%", backgroundColor: '#000' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block', height: "100%" },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: 60, position: 'sticky', height: "100%",backgroundColor: '#000'},
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

DashboardDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardDrawer;