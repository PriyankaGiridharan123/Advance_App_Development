package com.example.jobspark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.jobspark.dto.Userdto;
import com.example.jobspark.model.UserEntity;
import com.example.jobspark.repository.UserRepository;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public List<UserEntity> getAllApplicant(){
        return userRepo.findAll();
    }

    public Optional<UserEntity> getApplicantById(int id){
        return userRepo.findById(id);
    }

    public Optional<UserEntity> getApplicantByEmail(String email){
        return userRepo.findByEmail(email);
    }

    public UserEntity saveApplicant( @NonNull UserEntity applicant){
        return userRepo.save(applicant);
    }

    public UserEntity updateApplicant(@NonNull String email, Userdto dto){
        return userRepo.findByEmail(email)
            .map(existingUser -> {
            existingUser.setUsername(dto.getUsername());
            existingUser.setEmail(dto.getEmail());
            existingUser.setPassword(dto.getPassword());
            existingUser.setPhone(dto.getPhone());
            return userRepo.save(existingUser);
        })
        .orElseThrow(()-> new RuntimeException("Applicant not found with this email:"+email));
    }

    public void deleteApplicant(int id){
        userRepo.deleteById(id);
    }
}
