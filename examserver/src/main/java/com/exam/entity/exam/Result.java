package com.exam.entity.exam;


import com.exam.entity.User;

import javax.persistence.*;

@Entity
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long resId;

    private long correctAns;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    private Quiz quiz;

    private long attemptQues;

    private long totalMarks;

    private String dataTime;

    private Result(){

    }

    public Result( long correctAns, User user, Quiz quiz, long attemptQues, long totalMarks, String dataTime) {
        this.correctAns = correctAns;
        this.user = user;
        this.quiz = quiz;
        this.attemptQues = attemptQues;
        this.totalMarks = totalMarks;
        this.dataTime = dataTime;
    }



    public long getResId() {
        return resId;
    }

    public void setResId(long resId) {
        this.resId = resId;
    }

    public long getCorrectAns() {
        return correctAns;
    }

    public void setCorrectAns(long correctAns) {
        this.correctAns = correctAns;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public long getAttemptQues() {
        return attemptQues;
    }

    public void setAttemptQues(long attemptQues) {
        this.attemptQues = attemptQues;
    }

    public long getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(long totalMarks) {
        this.totalMarks = totalMarks;
    }

    public String getDataTime() {
        return dataTime;
    }

    public void setDataTime(String dataTime) {
        this.dataTime = dataTime;
    }
}
