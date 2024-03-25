package com.example.jobspark.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobspark.model.FeedbackEntity;

@Repository
public interface FeedbackRepository extends JpaRepository <FeedbackEntity,Integer>{
    Optional <FeedbackEntity> findByName(String name);
}
