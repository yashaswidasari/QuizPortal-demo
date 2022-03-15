package com.exam.entity.exam;

import javax.persistence.*;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long quesid;
    @Column(length = 500)
    private String answer;

    @Column(length = 5000)
    private String content;
    private String image;
    private String option1;
    private String option2;
    @Column(length = 500)
    private String option3;
    @Column(length = 500)
    private String option4;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Quiz quiz;

    @Transient
    private String givenAnswer;


    public Question() {
    }

    public Question(long quesid, String answer, String content, String image, String option1, String option2, String option3, String option4) {
        this.quesid = quesid;
        this.answer = answer;
        this.content = content;
        this.image = image;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
    }

    public long getQuesid() {
        return quesid;
    }

    public void setQuesid(long quesid) {
        this.quesid = quesid;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getOption1() {
        return option1;
    }

    public void setOption1(String option1) {
        this.option1 = option1;
    }

    public String getOption2() {
        return option2;
    }

    public void setOption2(String option2) {
        this.option2 = option2;
    }

    public String getOption3() {
        return option3;
    }

    public void setOption3(String option3) {
        this.option3 = option3;
    }

    public String getOption4() {
        return option4;
    }

    public void setOption4(String option4) {
        this.option4 = option4;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public String getGivenAnswer() {
        return givenAnswer;
    }

    public void setGivenAnswer(String givenAnswer) {
        this.givenAnswer = givenAnswer;
    }
}
