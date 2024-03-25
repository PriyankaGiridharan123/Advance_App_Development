package com.example.jobspark.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobspark.model.JobStatusEntity;

@Repository
public interface JobStatusRepository extends JpaRepository<JobStatusEntity,Integer>{
    Optional <JobStatusEntity> findByJobTitle(String jobTitle);
}
