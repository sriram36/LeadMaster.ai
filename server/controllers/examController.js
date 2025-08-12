const Question = require('../models/Question');

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.aggregate([{ $sample: { size: 25 } }]);
        res.json(questions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.submitExam = async (req, res) => {
    const { answers } = req.body;
    let score = 0;

    try {
        for (const answer of answers) {
            const question = await Question.findById(answer.questionId);
            if (question.answer === answer.selectedOption) {
                score++;
            }
        }
        res.json({ score });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
