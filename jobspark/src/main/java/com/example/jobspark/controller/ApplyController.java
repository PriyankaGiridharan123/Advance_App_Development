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

import com.example.jobspark.dto.Applydto;
import com.example.jobspark.model.ApplyEntity;
import com.example.jobspark.service.ApplyService;

import io.micrometer.common.lang.NonNull;

@RestController
@RequestMapping("/api/apply")
public class ApplyController {
    @Autowired
    private ApplyService applyService;

    @PostMapping("/applyJob")
     @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<ApplyEntity> createDetail(@NonNull @RequestBody ApplyEntity applyEntity) {
        ApplyEntity appliedJob=applyService.createDetaill(applyEntity);
        return new ResponseEntity<>(appliedJob,HttpStatus.CREATED);
    }

    @GetMapping("viewDetail/{name}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getByName(@PathVariable String name){
        Optional<ApplyEntity> applyEntity=applyService.getByName(name);
        return applyEntity.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/viewDetails")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity <List<ApplyEntity>> getAllDetails() {
        List<ApplyEntity> applyEntity=applyService.viewAllDetails();
        return new ResponseEntity<>(applyEntity, HttpStatus.OK);
    }

    @PutMapping("updateDetails/{name}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<ApplyEntity> updateDetaill(@NonNull @PathVariable String name, @RequestBody Applydto applydto) {
        ApplyEntity updated=applyService.updateDetails(name, applydto);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @DeleteMapping("/deleteDetails/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity <Void> deleteDetaill(@NonNull @PathVariable int id){
        applyService.deleteDetails(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
