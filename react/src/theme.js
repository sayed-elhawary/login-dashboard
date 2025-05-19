import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.REACT_APP_PRIMARY_COLOR || '#4e73df',
    },
    secondary: {
      main: process.env.REACT_APP_SECONDARY_COLOR || '#f8f9fc',
    },
    background: {
      default: '#f8f9fc',
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
        },
      },
    },
  },
});

export default theme;
