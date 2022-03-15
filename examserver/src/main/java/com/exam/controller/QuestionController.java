package com.exam.controller;


import com.exam.entity.User;
import com.exam.entity.exam.Question;
import com.exam.entity.exam.Quiz;
import com.exam.entity.exam.Result;
import com.exam.repo.QuizRepository;
import com.exam.repo.UserRepository;
import com.exam.services.QuestionService;
import com.exam.services.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @Autowired
    QuizRepository quizRepo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    ResultService resultService;




    @PostMapping("/")
    public ResponseEntity<?> addQuestion(@RequestBody Question question){
        long qid= question.getQuiz().getQid();
        question.setQuiz(this.quizRepo.findById(qid).get());
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }


    @PutMapping("/")
    public ResponseEntity<?> updateQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @GetMapping("/{quesId}")
    public Question getQuestion(@PathVariable("quesId") long quesId){
        return this.questionService.getQuestion(quesId);
    }

    @GetMapping("/")
    public Set<Question> getQuestions(){
        return this.questionService.getQuestions();
    }

    @GetMapping("/quiz/{quizId}")
    public ResponseEntity<?> getQuestionsbyQuiz(@PathVariable("quizId") long quizId){
//        return this.questionService.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(this.questionService.getQuestionsOfQuiz(this.quizRepo.findById(quizId).get()));
    }



    @GetMapping("/quiz/all/{quizId}")
    public ResponseEntity<?> getAllQuestionsbyQuiz(@PathVariable("quizId") long quizId){
//        return this.questionService.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(this.questionService.getAllQuestionsOfQuiz(this.quizRepo.findById(quizId).get()));
    }


    //get questions for quiz
    @GetMapping("/quiz/test/{quizId}")
    public ResponseEntity<?> getAllQuestionsbyQuizForTest(@PathVariable("quizId") long quizId){
//        return this.questionService.getQuestionsOfQuiz(quiz);
        Quiz local = this.quizRepo.findById(quizId).get();
        return ResponseEntity.ok(this.questionService.getAllQuestionsOfQuizForTest(local));
    }

    @DeleteMapping("/{quesId}")
    public void  deleteQuestion(@PathVariable("quesId") long quesId){
         this.questionService.deleteQuestion(quesId);
    }


    @PostMapping("/quiz/result/{qid}/{userId}/{date}")
    public ResponseEntity<?> getResults(@RequestBody List<Question> questions, @PathVariable("userId") long userId,@PathVariable("qid") long qid,@PathVariable("date") String date){

        User localUser = this.userRepo.findById(userId).get();
        Quiz localQuiz = this.quizRepo.findById(qid).get();

        Integer correctAnswers = 0;
        Integer attempted = 0;
        Integer totalMarks =0;
        List<String> answer = new ArrayList<>();
//         Set<String> answer = new HashSet<>();
        for(Question ques: questions){
            Question local = this.questionService.getQuestion(ques.getQuesid());
            answer.add(local.getAnswer());
            if(local.getAnswer().equals(ques.getGivenAnswer())){
                correctAnswers++;
                attempted++;
            }
            else if (ques.getGivenAnswer() != null){
                attempted++;
            }

            if(local.getAnswer() == null){
                correctAnswers++;
                attempted++;
            }
        }


        // this.totalMarks = ((this.questions[0].quiz.maxMarks) / (this.questions[0].quiz.numOfQuestions)) * (this.quizMarks);

        totalMarks = Integer.parseInt((questions.get(0).getQuiz().getMaxMarks()))/Integer.parseInt((questions.get(0).getQuiz().getNumOfQuestions())) * (correctAnswers);


        //saving result data in result table
        Result result =new Result(correctAnswers,localUser,localQuiz,attempted,totalMarks,date);


        Map<String ,Object> results = new HashMap<>();
//        results.put("CorrectAnswer",correctAnswers);
//        results.put("AtemptedQuestions",attempted);
//        results.put("TotalMarks",totalMarks);
        results.put("quesAnswers",answer);
        results.put("Result",this.resultService.saveResult(result));



        return ResponseEntity.ok(results);
    }




}
