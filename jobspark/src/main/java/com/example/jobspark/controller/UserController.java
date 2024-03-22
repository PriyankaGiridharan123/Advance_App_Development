package com.example.jobspark.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobspark.model.UserEntity;
import com.example.jobspark.service.UserService;


import io.micrometer.common.lang.NonNull;

@RestController
@RequestMapping("api/applicant")
public class UserController {

    @Autowired
    public UserService applicantService;

    @PostMapping("/createApplicant")
    public ResponseEntity <UserEntity> createApplicant(@NonNull @RequestBody UserEntity applicant){
        UserEntity createdApplicant=applicantService.saveApplicant(applicant);
        return new ResponseEntity<>(createdApplicant,HttpStatus.CREATED);
    }
}
