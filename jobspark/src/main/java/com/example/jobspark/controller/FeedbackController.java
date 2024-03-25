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

import com.example.jobspark.dto.Feedbackdto;
import com.example.jobspark.model.FeedbackEntity;
import com.example.jobspark.service.FeedbackService;

import io.micrometer.common.lang.NonNull;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/postfeedback")
     @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<FeedbackEntity> postFeedbackk(@NonNull @RequestBody FeedbackEntity feedbackEntity) {
        FeedbackEntity feedback=feedbackService.postFeedback(feedbackEntity);
        return new ResponseEntity<>(feedback,HttpStatus.CREATED);
    }

    @GetMapping("viewFeedback/{name}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getByName(@PathVariable String name){
        Optional<FeedbackEntity> feedbackEntity=feedbackService.getByName(name);
        return feedbackEntity.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/viewFeedbackss")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity <List<FeedbackEntity>> getAllFeedbacks() {
        List<FeedbackEntity> feedbackEntity=feedbackService.viewAllFeedbacks();
        return new ResponseEntity<>(feedbackEntity, HttpStatus.OK);
    }

    @PutMapping("updateFeedbacks/{name}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<FeedbackEntity> updateFeedbackss(@NonNull @PathVariable String name, @RequestBody Feedbackdto feedbackdto) {
        FeedbackEntity updated=feedbackService.updateFeedback(name, feedbackdto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("/deleteFeedbacks/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity <Void> deleteFeedback(@NonNull @PathVariable int id){
        feedbackService.deleteFeedback(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
