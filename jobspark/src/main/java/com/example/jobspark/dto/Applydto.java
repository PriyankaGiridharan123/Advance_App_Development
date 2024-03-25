package com.example.jobspark.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Applydto {
    private String name;
    private String contactNumber;
    private String email;
    private String age;
    private String gender;
}
