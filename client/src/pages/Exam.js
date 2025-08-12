import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Grid,
    Button,
    Container,
    Paper,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from '@mui/material';
import examService from '../services/examService';
import ConfirmationModal from '../components/ConfirmationModal';

const Exam = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(new Map());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(1800);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const handleSubmit = useCallback(async () => {
        const formattedAnswers = Array.from(answers.entries()).map(([questionId, selectedOption]) => ({
            questionId,
            selectedOption,
        }));
        const { score } = await examService.submitExam({ answers: formattedAnswers });
        navigate('/result', { state: { score, totalQuestions: questions.length } });
    }, [answers, navigate, questions.length]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await examService.getQuestions();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                handleSubmit();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, handleSubmit]);

    const handleAnswer = (selectedOption) => {
        const newAnswers = new Map(answers);
        newAnswers.set(questions[currentQuestionIndex]._id, selectedOption);
        setAnswers(newAnswers);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={2} sx={{ p: 2, mb: 2, position: 'sticky', top: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">LeadMasters Assessment</Typography>
                <Typography color="error" fontWeight="bold">
                    Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
                </Typography>
            </Paper>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    {currentQuestion && (
                        <Box>
                            <Typography variant="subtitle1" gutterBottom>
                                Question {currentQuestionIndex + 1} of {questions.length}
                            </Typography>
                            <Typography variant="h5" gutterBottom>{currentQuestion.question}</Typography>
                            <FormControl component="fieldset" sx={{ mb: 2 }}>
                                <FormLabel component="legend">Choose an option:</FormLabel>
                                <RadioGroup
                                    value={answers.get(currentQuestion._id) || ''}
                                    onChange={(e) => handleAnswer(e.target.value)}
                                >
                                    {currentQuestion.options.map((option) => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio />}
                                            label={option}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                                    disabled={currentQuestionIndex === 0}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                                    disabled={currentQuestionIndex === questions.length - 1}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={1} sx={{ p: 2, position: 'sticky', top: 80 }}>
                        <Typography variant="subtitle1" gutterBottom>Question Palette</Typography>
                        <Grid container spacing={1}>
                            {questions.map((q, index) => (
                                <Grid item xs={2} key={q._id}>
                                    <Button
                                        variant={index === currentQuestionIndex ? "contained" : answers.has(q._id) ? "outlined" : "text"}
                                        color={index === currentQuestionIndex ? "primary" : answers.has(q._id) ? "success" : "inherit"}
                                        onClick={() => setCurrentQuestionIndex(index)}
                                        sx={{ minWidth: 0, width: '100%' }}
                                    >
                                        {index + 1}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                        <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }} onClick={onOpen}>
                            Finish & Submit Exam
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            <ConfirmationModal isOpen={isOpen} onClose={onClose} onConfirm={handleSubmit} />
        </Container>
    );
};

export default Exam;
