package com.example.jobspark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobspark.dto.JobStatusdto;
import com.example.jobspark.model.JobStatusEntity;
import com.example.jobspark.repository.JobStatusRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class JobStatusService {

    @Autowired
    private JobStatusRepository jobStatusRepository;

    public JobStatusEntity createJobStatus(@NonNull JobStatusEntity jobEntity){
        return jobStatusRepository.save(jobEntity);
    }

    public Optional<JobStatusEntity> getJobByTitle(String jobTitle){
        return jobStatusRepository.findByJobTitle(jobTitle);
    }

    public List <JobStatusEntity> getAllJobStatus(){
        return jobStatusRepository.findAll();
    }

    public JobStatusEntity updateJobStatus(@NonNull String jobTitle, JobStatusdto jobstatusdto){
        return jobStatusRepository.findByJobTitle(jobTitle)
        .map(existingJob -> {
            existingJob.setStatus(jobstatusdto.getStatus());
                return jobStatusRepository.save(existingJob);
        })
        .orElseThrow(() -> new RuntimeException("Job not Found: "+jobTitle));
    }

    public void deleteJobStatus(@NonNull int id) {
        jobStatusRepository.deleteById(id);
    }
    
}
