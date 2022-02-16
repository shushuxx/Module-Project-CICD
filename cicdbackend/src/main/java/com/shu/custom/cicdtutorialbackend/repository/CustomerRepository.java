package com.shu.custom.cicdtutorialbackend.repository;

import com.shu.custom.cicdtutorialbackend.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
//    Customer findByCustomerName(String customerName);
}
