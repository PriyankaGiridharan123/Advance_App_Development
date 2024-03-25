package com.example.jobspark.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobspark.dto.Userdto;
import com.example.jobspark.model.UserEntity;
import com.example.jobspark.service.UserService;


import io.micrometer.common.lang.NonNull;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("api/applicant")
public class UserController {

    @Autowired
    public UserService applicantService;

    @PostMapping("/createApplicant")
    public ResponseEntity <UserEntity> createApplicant(@NonNull @RequestBody UserEntity applicant){
        UserEntity createdApplicant=applicantService.createApplicant(applicant);
        return new ResponseEntity<>(createdApplicant,HttpStatus.CREATED);
    }

    @GetMapping("getApplicant/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email){
        Optional<UserEntity> applicant=applicantService.getApplicantByEmail(email);
        return applicant.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
        .orElseGet(()-> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("readApplicants")
    public ResponseEntity <List<UserEntity>> getAllApplicant() {
        List <UserEntity> applicants=applicantService.getAllApplicant();
        return new ResponseEntity<>(applicants,HttpStatus.OK);
    }

    @PutMapping("updateApplicant/{email}")
    public ResponseEntity<UserEntity> UpdateApplicant(@PathVariable String email, @RequestBody Userdto dto) {
        UserEntity updated=applicantService.updateApplicant(email, dto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("deleteApplicant/{id}")
    public ResponseEntity<Void> removeApplicant(@NonNull @PathVariable Integer id){
        applicantService.deleteApplicant(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
