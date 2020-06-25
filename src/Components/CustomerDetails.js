import React from "react";
import "./CustomerDetails.css";
import PropTypes from "prop-types";n
import Customer from "./Customer";
import Table from "react-bootstrap/Table";


const CustomerDetails = props => {
  const customerDetails = props.customers.map((customer, i) => {
    return (
      <Customer
        key={i}
        {...customer}
        selectCustomerCallback={props.selectCustomerCallback}
      />
    );
  });

  return (
    <div className="background">
      <Table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Account Credit</th>
            <th>Checked Out Movies</th>
          </tr>
        <tbody>{customerDetails}</tbody>
      </Table>
    </div>
  );
};

CustomerDetails.propTypes = {
  customers: PropTypes.array,
  selectCustomerCallback: PropTypes.func.isRequired
}

export default CustomerDetails;