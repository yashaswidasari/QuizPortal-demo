package com.exam.services.impl;

import com.exam.entity.exam.Result;
import com.exam.repo.ResultRepo;
import com.exam.services.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ResultServiceImpl implements ResultService {

    @Autowired
    ResultRepo resultRepo;

    @Override
    public Result saveResult(Result result) {

        return this.resultRepo.save(result);
    }
}
