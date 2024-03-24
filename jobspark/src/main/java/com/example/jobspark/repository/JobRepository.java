package com.example.jobspark.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobspark.model.JobEntity;
@Repository
public interface JobRepository extends JpaRepository<JobEntity,Integer>{
    Optional <JobEntity> findByJobTitle(String jobTitle);
    
}
