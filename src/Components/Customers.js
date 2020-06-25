import React, { Component } from 'react';
import axios from 'axios';
import './Customers.css';
import PropTypes from "prop-types";

const Customer = props => {
  const {
    id,
    name,
    city,
    state,
    phone,
    account_credit,
    movies_checked_out,
    selectCustomerCallback
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{phone}</td>
      <td>${account_credit}</td>
      <td>{movies_checked_out}</td>
      <td>
        
      <button variant="primary"
          type="button"
          onClick={() => {
            selectCustomerCallback(id);
          }}
      >
        Select
      </button>

      </td>
    </tr>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out: PropTypes.number.isRequired,
}

export default Customer;