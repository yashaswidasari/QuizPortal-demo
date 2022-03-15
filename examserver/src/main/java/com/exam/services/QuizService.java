package com.exam.services;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;


@Service
public interface QuizService<list> {

    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(long qid);

    public void deleteQuiz(long qid);

    public Set<Quiz> getQuizzesByCategory(Category category);

    public List<Quiz> getQuizzesByActive(Boolean b);

    public List<Quiz>  getQuizzesByCategoryAndActive(Category category,Boolean b);
}
