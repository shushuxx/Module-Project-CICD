package com.shu.custom.cicdtutorialbackend.controller;

import com.shu.custom.cicdtutorialbackend.domain.Customer;
import com.shu.custom.cicdtutorialbackend.domain.CustomerDto;
import com.shu.custom.cicdtutorialbackend.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
//@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/api/getAll")
    public List<Customer> customerList(){
        return customerService.getAllCustomer();
    }

    @PostMapping("/api/add")
    public String addCustomer(@ModelAttribute CustomerDto customerDto) {
        if (customerService.addCustomer(customerDto) == 1) {
            return "New Customer Registered!";
        } else {
            return "Register Fail!";
        }
    }

    @PutMapping("/api/edit")
    public String editCustomer(@ModelAttribute CustomerDto customerDto) {
        if(customerService.editCustomer(customerDto) == 1) {
            return "Edit Success!";
        } else {
            return "Fail! Try Again";
        }
    }

    @GetMapping("/api/listAll")
    public ResponseEntity< List<Customer> > listAll() { return ResponseEntity.ok().body( customerService.getAllCustomer()); }

    @GetMapping("/api/get/{id}")
    public CustomerDto get(@PathVariable("id") Long id) {return customerService.getCustomerById(id); }

    @DeleteMapping("/api/del/{id}")
    public void deleteCustomer(@PathVariable("id") Long id) { customerService.deleteCustomer(id); }
}
