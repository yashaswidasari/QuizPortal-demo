package com.exam.repo;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

public interface QuizRepository extends JpaRepository<Quiz, Long> {


    @Modifying
    @Transactional
    @Query(value = "DELETE FROM quiz WHERE qid = ?1", nativeQuery = true)
    public void deleteQuizById(Long qid);

    public Set<Quiz> findByCategory(Category category);

    public List<Quiz> findByActive(Boolean b);

    public List<Quiz> findByCategoryAndActive(Category c,Boolean b);
}
