import { Link } from 'react-router-dom';
import { Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar() {
  const drawerWidth = 300;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Toolbar /> */}
      <Typography component="h1" variant="h3">
        St Peters UMC
      </Typography>
      <Divider />
      <List>
        {['Home', 'Members', 'Finance', 'Events', 'Reports', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <Link to={text.toLowerCase()}>{text}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <Link to="/">{text}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
