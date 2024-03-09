package com.example.PlaceZen.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Applied {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int JobId;
    private int StudentId;
    private String Date;
    public Applied(int jobId, int studentId, String date) {
        JobId = jobId;
        StudentId = studentId;
        Date = date;
    }
}
