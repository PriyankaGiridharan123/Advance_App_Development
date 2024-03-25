package com.example.jobspark.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobspark.dto.JobStatusdto;
import com.example.jobspark.model.JobStatusEntity;
import com.example.jobspark.service.JobStatusService;

import io.micrometer.common.lang.NonNull;

@RestController
@RequestMapping("/api/jobstatus")
public class JobStatusController {
    
    @Autowired
    private JobStatusService jobStatusService;

    @PostMapping("/jobStatus")
     @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<JobStatusEntity> createJobStatus(@NonNull @RequestBody JobStatusEntity jobStatusEntity) {
        JobStatusEntity createdJobStatus=jobStatusService.createJobStatus(jobStatusEntity);
        return new ResponseEntity<>(createdJobStatus,HttpStatus.CREATED);
    }

    @GetMapping("viewJobStatus/{jobTitle}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getJobByTitle(@PathVariable String jobTitle){
        Optional<JobStatusEntity> jobStatusEntity=jobStatusService.getJobByTitle(jobTitle);
        return jobStatusEntity.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/viewJobsStatuss")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity <List<JobStatusEntity>> getAllJobsStatuss() {
        List<JobStatusEntity> jobStatusEntity=jobStatusService.getAllJobStatus();
        return new ResponseEntity<>(jobStatusEntity, HttpStatus.OK);
    }

    @PutMapping("updateJobStatus/{jobTitle}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<JobStatusEntity> updateJobStatus(@NonNull @PathVariable String jobTitle, @RequestBody JobStatusdto jobstatusdto) {
        JobStatusEntity updated=jobStatusService.updateJobStatus(jobTitle, jobstatusdto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("/deleteJob/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity <Void> deleteJobStatus(@NonNull @PathVariable int id){
        jobStatusService.deleteJobStatus(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
