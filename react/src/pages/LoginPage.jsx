import { Box, Typography } from '@mui/material';
import Login from '../components/Auth/Login';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Box
        sx={{
          maxWidth: '500px',
          width: '100%',
          margin: 'auto',
          padding: '2rem',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, color: 'primary.main' }}
        >
          تسجيل الدخول
        </Typography>
        <Login />
      </Box>
    </Box>
  );
};

export default LoginPage;
