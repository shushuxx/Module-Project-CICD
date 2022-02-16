package com.shu.custom.cicdtutorialbackend.service;

import com.shu.custom.cicdtutorialbackend.domain.Customer;
import com.shu.custom.cicdtutorialbackend.domain.CustomerDto;

import java.util.List;

public interface CustomerService {
    int addCustomer(CustomerDto customerDto);
    int editCustomer(CustomerDto customerDto);
    List<Customer> getAllCustomer();
    CustomerDto getCustomerById(Long id);
    void deleteCustomer(Long id);
}
