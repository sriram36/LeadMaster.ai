import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    Button,
    CircularProgress,
} from '@mui/material';
import authService from '../services/authService';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };
    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

    const handleLogout = () => {
        authService.logout();
        navigate('/login');
    };

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3, width: '100%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Assessment Complete!</Typography>
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                    <CircularProgress variant="determinate" value={percentage} size={120} thickness={8} color="success" />
                    <Box sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}>
                        <Typography variant="h6" component="div" color="text.secondary">
                            {Math.round(percentage)}%
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Your Score: {score} / {totalQuestions}
                </Typography>
                <Typography sx={{ mb: 2 }}>Thank you for taking the assessment.</Typography>
                <Button variant="contained" color="primary" fullWidth onClick={handleLogout}>
                    Logout
                </Button>
            </Box>
        </Container>
    );
};

export default Result;
