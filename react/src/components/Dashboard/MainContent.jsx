import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { BarChart, PieChart } from '@mui/icons-material';

const MainContent = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        نظرة عامة
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                المستخدمون النشطون
              </Typography>
              <Typography variant="h4" component="div">
                1,234
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                الزيارات اليوم
              </Typography>
              <Typography variant="h4" component="div">
                567
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                معدل التحويل
              </Typography>
              <Typography variant="h4" component="div">
                12.5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3, p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              إحصائيات الزيارات
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <BarChart sx={{ fontSize: 150, color: 'action.disabled' }} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3, p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              توزيع المستخدمين
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <PieChart sx={{ fontSize: 150, color: 'action.disabled' }} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
