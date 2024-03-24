package com.example.jobspark.service;

import java.util.Optional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobspark.dto.Jobdto;
import com.example.jobspark.model.JobEntity;
import com.example.jobspark.repository.JobRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public JobEntity createJob(@NonNull JobEntity jobEntity){
        return jobRepository.save(jobEntity);
    }

    public Optional<JobEntity> getJobByTitle(String jobTitle){
        return jobRepository.findByJobTitle(jobTitle);
    }

    public List <JobEntity> getAllJobs(){
        return jobRepository.findAll();
    }

    public JobEntity updateJob(@NonNull String jobTitle, Jobdto jobdto){
        return jobRepository.findByJobTitle(jobTitle)
        .map(existingJob -> {
            existingJob.setDepartment(jobdto.getDepartment());
            existingJob.setLocation(jobdto.getLocation());
            existingJob.setDeadline(jobdto.getDeadline());
            existingJob.setCategory(jobdto.getCategory());
            existingJob.setApplicationFee(jobdto.getApplicationFee());
                return jobRepository.save(existingJob);
        })
        .orElseThrow(() -> new RuntimeException("Job not Found: "+jobTitle));
    }

    public void deleteJob(@NonNull int id) {
        jobRepository.deleteById(id);
    }
}
