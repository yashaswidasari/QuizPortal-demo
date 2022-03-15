package com.exam.services;

import com.exam.entity.exam.Result;
import org.springframework.stereotype.Component;


@Component
public interface ResultService {

    public Result saveResult(Result result);
}
