package com.exam.entity.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long cid;

    private String title;

    @Column(length = 5000)
    private String description;

    @OneToMany(cascade = CascadeType.ALL,fetch= FetchType.LAZY,mappedBy="category")
    @JsonIgnore
    private Set<Quiz> quizzes=new LinkedHashSet<>();

    public Category( String title, String description){
        this.title = title;
        this.description = description;
    }

    public Category() {

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

    public long getCid() {
        return cid;
    }

    public Set<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(Set<Quiz> quizzes) {
        this.quizzes = quizzes;
    }
}
