package com.exam.services.impl;

import com.exam.entity.exam.Question;
import com.exam.entity.exam.Quiz;
import com.exam.repo.QuestionRepository;
import com.exam.services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    QuestionRepository questionRepo;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepo.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepo.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepo.findAll());
    }

    @Override
    public Question getQuestion(long quesId) {
        return this.questionRepo.findById(quesId).get();
    }

    @Override
    public Set<Question> getQuestionsOfQuiz(Quiz quiz) {

        Set<Question> questions= this.questionRepo.findByQuiz(quiz);
        List questionList = new ArrayList(questions);
        Collections.shuffle(questionList);
        int numofqestions=Integer.parseInt(quiz.getNumOfQuestions());

        if(questionList.size()>Integer.parseInt(quiz.getNumOfQuestions())) {
            questionList = questionList.subList(0, Integer.parseInt(quiz.getNumOfQuestions()));
        }
        Collections.shuffle(questionList);

        return new HashSet<>(questionList);
    }

    @Override
    public Set<Question> getAllQuestionsOfQuiz(Quiz quiz) {
        Set<?> set=this.questionRepo.findByQuiz(quiz);
        return this.questionRepo.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestion(long quesId) {
        Question question = new Question();
        question.setQuesid(quesId);
        this.questionRepo.delete(question);
    }

    @Override
    public List<Question> getAllQuestionsOfQuizForTest(Quiz quiz) {
        Set<Question> quesSet = this.questionRepo.findByQuiz(quiz);
        List<Question> testQues = new ArrayList<>(quesSet);

        Collections.shuffle(testQues);

        if(testQues.size()>Integer.parseInt(quiz.getNumOfQuestions())){
            testQues = testQues.subList(0,Integer.parseInt(quiz.getNumOfQuestions()));
        }
        Collections.shuffle(testQues);
        testQues.forEach((data)->
                data.setAnswer(null));

        return testQues;
    }
}
