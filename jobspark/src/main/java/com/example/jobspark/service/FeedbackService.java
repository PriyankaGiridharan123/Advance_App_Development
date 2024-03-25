package com.example.jobspark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobspark.dto.Feedbackdto;
import com.example.jobspark.model.FeedbackEntity;
import com.example.jobspark.repository.FeedbackRepository;

import io.micrometer.common.lang.NonNull;

@Service
public class FeedbackService {
    
    @Autowired
    private FeedbackRepository feedbackRepository;

    public FeedbackEntity postFeedback(@NonNull FeedbackEntity feedbackEntity){
        return feedbackRepository.save(feedbackEntity);
    }

    public List <FeedbackEntity> viewAllFeedbacks(){
        return feedbackRepository.findAll();
    }

    public Optional<FeedbackEntity> getByName(String name) {
        return feedbackRepository.findByName(name);
    }

    public FeedbackEntity updateFeedback(@NonNull String name, Feedbackdto feedbackdto){
        return feedbackRepository.findByName(name)
        .map(existingJob -> {
            existingJob.setMessage(feedbackdto.getMessage());
                return feedbackRepository.save(existingJob);
        })
        .orElseThrow(() -> new RuntimeException("Name not Found: "+name));
    }

    public void deleteFeedback(@NonNull int id) {
        feedbackRepository.deleteById(id);
    }
}
