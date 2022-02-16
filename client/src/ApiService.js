import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/getAll";

class ApiService {

    fetchCustomers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchCustomerByID(customerID) {
        return axios.get(USER_API_BASE_URL + '/' + customerID);
    }

    deleteCustomer(customerID) {
        return axios.delete(USER_API_BASE_URL + '/' + customerID);
    }

    addCustomer(customer) {
        return axios.post(USER_API_BASE_URL, customer);
    }

    editCustomer(customer) {
        return axios.put(USER_API_BASE_URL + '/' + customer.id, customer)
    }

}

export default new ApiService;