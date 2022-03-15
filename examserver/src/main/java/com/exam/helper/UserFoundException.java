package com.exam.helper;


public class UserFoundException extends Exception{
    public UserFoundException() {
        super("User already Exits in DB,Try again!");
    }

    public UserFoundException(String message) {
        super(message);
    }
}
