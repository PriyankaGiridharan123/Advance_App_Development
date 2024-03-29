package com.example.jobspark.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobspark.model.ApplyEntity;

@Repository
public interface ApplyRepository extends JpaRepository <ApplyEntity,Integer>{
    Optional <ApplyEntity> findByName(String name);
}
