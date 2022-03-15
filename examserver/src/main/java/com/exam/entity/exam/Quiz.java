package com.exam.entity.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long qid;



    private String title;
    @Column(length = 5000)
    private String description;
    private String maxMarks;
    private String numOfQuestions;
    private boolean active=false;


    @ManyToOne
    private Category category;

    @OneToMany(cascade =CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "quiz")
    @JsonIgnore
    private Set<Question> questions=new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL,fetch= FetchType.LAZY,mappedBy="quiz")
    @JsonIgnore
    private Set<Result> resultSet = new HashSet<>();

    public Quiz() {
    }

    public Quiz(String title, String description, String maxMarks, String numOfQuestions, boolean active) {
        this.title = title;
        this.description = description;
        this.maxMarks = maxMarks;
        this.numOfQuestions = numOfQuestions;
        this.active = active;
    }


    public void setQid(long qid) {
        this.qid = qid;
    }
    public long getQid() {
        return qid;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(String maxMarks) {
        this.maxMarks = maxMarks;
    }

    public String getNumOfQuestions() {
        return numOfQuestions;
    }

    public void setNumOfQuestions(String numOfQuestions) {
        this.numOfQuestions = numOfQuestions;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}
