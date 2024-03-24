package com.example.jobspark.controller;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobspark.dto.Jobdto;
import com.example.jobspark.model.JobEntity;
import com.example.jobspark.service.JobService;

import io.micrometer.common.lang.NonNull;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    @PostMapping("/createJob")
     @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<JobEntity> createJob(@NonNull @RequestBody JobEntity jobEntity) {
        JobEntity createdJob=jobService.createJob(jobEntity);
        return new ResponseEntity<>(createdJob,HttpStatus.CREATED);
    }

    @GetMapping("viewJob/{jobTitle}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getJobByTitle(@PathVariable String jobTitle){
        Optional<JobEntity> jobEntity=jobService.getJobByTitle(jobTitle);
        return jobEntity.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/viewJobs")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity <List<JobEntity>> getAllJobs() {
        List<JobEntity> jobEntity=jobService.getAllJobs();
        return new ResponseEntity<>(jobEntity, HttpStatus.OK);
    }
    
    @PutMapping("updateJob/{jobTitle}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<JobEntity> updateJob(@NonNull @PathVariable String jobTitle, @RequestBody Jobdto jobdto) {
        JobEntity updated=jobService.updateJob(jobTitle, jobdto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("/deleteJob/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity <Void> deleteJob(@NonNull @PathVariable int id){
        jobService.deleteJob(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
