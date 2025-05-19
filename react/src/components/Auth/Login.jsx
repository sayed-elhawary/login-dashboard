import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Link, Alert, Checkbox, FormControlLabel } from '@mui/material';
import AuthForm from './AuthForm';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email: formData.email,
        password: formData.password
      });

      // Save token to localStorage if remember me is checked
      if (formData.remember) {
        localStorage.setItem('token', response.data.token);
      } else {
        sessionStorage.setItem('token', response.data.token);
      }

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        fullWidth
        label="البريد الإلكتروني"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="كلمة المرور"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
      />
      <FormControlLabel
        control={
          <Checkbox
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            color="primary"
          />
        }
        label="تذكرني"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="/forgot-password" variant="body2">
            نسيت كلمة المرور؟
          </Link>
        </Grid>
        <Grid item>
          <Link href="/register" variant="body2">
            ليس لديك حساب؟ سجل الآن
          </Link>
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default Login;
