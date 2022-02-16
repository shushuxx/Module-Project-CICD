package com.shu.custom.cicdtutorialbackend.service;

import com.shu.custom.cicdtutorialbackend.domain.Customer;
import com.shu.custom.cicdtutorialbackend.domain.CustomerDto;
import com.shu.custom.cicdtutorialbackend.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public int addCustomer(CustomerDto customerDto) {
        log.info("saved.");
        Customer customer = new Customer();
        try {
            customer = Customer.builder()
                    .id(null)
                    .name(customerDto.getName())
                    .birthday(customerDto.getBirthday())
                    .gender(customerDto.getGender())
                    .job(customerDto.getJob())
                    .build();
            customerRepository.save(customer);
            return 1;
        } catch (Exception e) {
            log.error("error : {}" , e.getMessage());
            return 0;
        }
    }

    @Override
    public int editCustomer(CustomerDto customerDto) {
        log.info("Edit Customer. : {} ", customerDto);
        Customer customer = new Customer();
        try {
            customer = Customer.builder()
                    .id(null)
                    .name(customerDto.getName())
                    .birthday(customerDto.getBirthday())
                    .gender(customerDto.getGender())
                    .job(customerDto.getJob())
                    .build();
            customerRepository.save(customer);
            return 1;
        } catch (Exception e) {
            log.error("error : {}", e.getMessage());
            return 0;
        }
    }

    @Override
    public List<Customer> getAllCustomer() {
        log.info("get all Customer.");
        List<Customer> customerList = new ArrayList<>();
        try {
            customerList = customerRepository.findAll();
        } catch (Exception e) {
            log.error("error : {}", e.getMessage());
        }
        return customerList;
    }

    @Override
    public CustomerDto getCustomerById(Long id) {
        return null;
    }

    @Override
    public void deleteCustomer(Long id) {
        log.info("Delete Customer by Id {}.", id);
    }

}
