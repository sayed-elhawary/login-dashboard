import { Box } from '@mui/material';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import MainContent from '../components/Dashboard/MainContent';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <MainContent />
      </Box>
    </Box>
  );
};

export default DashboardPage;
