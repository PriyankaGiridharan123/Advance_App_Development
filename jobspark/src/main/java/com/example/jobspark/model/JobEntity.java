package com.example.jobspark.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="jobdetails")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class JobEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String jobTitle;
    private String department;
    private String location;
    private String responsibility;
    private String qualification;
    private String deadline;
    private String category;
    private String applicationFee;
}
