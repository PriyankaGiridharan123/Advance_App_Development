package com.example.jobspark.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Jobdto {
    private String department;
    private String location;
    private String deadline;
    private String category;
    private String applicationFee;
}
