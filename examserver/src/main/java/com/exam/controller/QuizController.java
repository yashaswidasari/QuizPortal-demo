package com.exam.controller;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import com.exam.repo.CategoryRepository;
import com.exam.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    QuizService quizService;

    @Autowired
    CategoryRepository categoryRepo;

    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    @GetMapping("/{quizId}")
    public  Quiz getQuiz(@PathVariable("quizId") long qid){
        return this.quizService.getQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public  Set<Quiz> getQuizByCategories(@PathVariable("cid") long cid){
        Category localCat = this.categoryRepo.findById(cid).get();
        return this.quizService.getQuizzesByCategory(localCat);
    }

    @GetMapping("/")
    public Set<Quiz> getQuizzes(){
        return this.quizService.getQuizzes();
    }


    @DeleteMapping("/{quizId}")
    public void deleteQuiz(@PathVariable("quizId") long qid1){
        this.quizService.deleteQuiz(qid1);
    }


    //user api to show active quizzes for a category
    @GetMapping("/category/{cid}/{active}")
    public List<Quiz> getQuizByCategoryAndActive(@PathVariable("cid") long cid, @PathVariable("active") boolean active){
        Category localCat = this.categoryRepo.findById(cid).get();
        return this.quizService.getQuizzesByCategoryAndActive(localCat,active);
    }

    //user api to show all active quizzes
    @GetMapping("/active/{active}")
    public List<Quiz> getQuizByActive(@PathVariable("active") boolean active){
        return this.quizService.getQuizzesByActive(active);
    }

}