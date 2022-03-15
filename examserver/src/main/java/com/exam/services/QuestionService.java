package com.exam.services;

import com.exam.entity.exam.Question;
import com.exam.entity.exam.Quiz;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface QuestionService {

    public Question addQuestion(Question question);

    public Question updateQuestion(Question question);

    public Set<Question> getQuestions();

    public Question getQuestion(long quesId);

    public Set<Question> getQuestionsOfQuiz(Quiz quiz);

    public Set<Question> getAllQuestionsOfQuiz(Quiz quiz);


    public void  deleteQuestion(long quesId);

    public List<Question> getAllQuestionsOfQuizForTest(Quiz quiz);
}
