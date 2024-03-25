package com.example.jobspark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobspark.dto.Applydto;
import com.example.jobspark.model.ApplyEntity;
import com.example.jobspark.repository.ApplyRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class ApplyService {

    @Autowired
    private ApplyRepository applyRepository;

    public ApplyEntity createDetaill(@NonNull ApplyEntity applyEntity){
        return applyRepository.save(applyEntity);
    }

    public List <ApplyEntity> viewAllDetails(){
        return applyRepository.findAll();
    }

    public Optional<ApplyEntity> getByName(String name) {
        return applyRepository.findByName(name);
    }

    public ApplyEntity updateDetails(@NonNull String name, Applydto applydto){
        return applyRepository.findByName(name)
        .map(existingJob -> {
            existingJob.setName(applydto.getName());
            existingJob.setEmail(applydto.getEmail());
            existingJob.setContactNumber(applydto.getContactNumber());
            existingJob.setAge(applydto.getAge());
            existingJob.setGender(applydto.getGender());
                return applyRepository.save(existingJob);
        })
        .orElseThrow(() -> new RuntimeException("Name not Found: "+name));
    }

    public void deleteDetails(@NonNull int id) {
        applyRepository.deleteById(id);
    }
}
