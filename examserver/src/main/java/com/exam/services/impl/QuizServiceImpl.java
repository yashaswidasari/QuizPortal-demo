package com.exam.services.impl;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import com.exam.repo.QuizRepository;
import com.exam.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Component
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepo;

    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new LinkedHashSet<>(this.quizRepo.findAll());
    }

    @Override
    public Quiz getQuiz(long qid) {
        return this.quizRepo.findById(qid).get();
    }

    @Override
    public void deleteQuiz(long qid) {
         this.quizRepo.deleteQuizById(qid);
    }

    @Override
    public Set<Quiz> getQuizzesByCategory(Category category) {
        return this.quizRepo.findByCategory(category);
    }


    //user service to show active quizzes
    @Override
    public List<Quiz> getQuizzesByActive(Boolean b) {
        return this.quizRepo.findByActive(b);
    }

    @Override
    public List<Quiz> getQuizzesByCategoryAndActive(Category category, Boolean b) {
        return this.quizRepo.findByCategoryAndActive(category,b);
    }
}
