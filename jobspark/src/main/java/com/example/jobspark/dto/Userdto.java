package com.example.jobspark.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Userdto {
    private String username;
    private String email;
    private String password;
    private String phone;
}
