package com.exam.repo;

import com.exam.entity.exam.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepo extends JpaRepository<Result,Long> {

}
