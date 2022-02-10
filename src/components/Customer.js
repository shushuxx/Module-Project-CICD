import React from "react";

function Customer({customer}) {
  return (
    <div>  
      <p>{customer.id}</p>
      <img src={customer.image}/>
      <h2>{customer.name}</h2>
      <p>{customer.birthday}</p>
      <p>{customer.gender}</p>
      <p>{customer.job}</p>
      <p>{customer.email}</p>
    </div>
  );
}

export default Customer;
