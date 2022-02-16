package com.shu.custom.cicdtutorialbackend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {

     private Long id;
     private String name;
     private int birthday;
     private String gender;
     private String job;

}
