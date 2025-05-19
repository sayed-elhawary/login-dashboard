import React from 'react';
import { 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography 
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#2c3e50',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {process.env.REACT_APP_SITE_NAME || 'لوحة التحكم'}
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {[
          { text: 'الرئيسية', icon: <DashboardIcon /> },
          { text: 'المستخدمون', icon: <PeopleIcon /> },
          { text: 'الإعدادات', icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem 
            button 
            key={item.text} 
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
              } 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        <ListItem 
          button 
          sx={{ 
            '&:hover': { 
              backgroundColor: 'rgba(255, 255, 255, 0.1)' 
            } 
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="تسجيل الخروج" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
