package com.shu.custom.cicdtutorialbackend.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int  birthday;
    private String gender;
    private String job;

    @Builder
    public Customer(Long id, String name, Integer birthday, String gender, String job) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.job = job;
    }
}
