import React, { Component } from 'react';
import axios from 'axios';



class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      error: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/customers/')
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

listCustomers = () => {
  return(
    this.state.customers.map((customer, i) => {
      return (
        <div key={i}>
            <h3>{customer.name}</h3>
            <p>{customer.phone}</p>
          </div>
      )
    })
  )
}

render() {
  return(
    <section>
      {this.listCustomers()}
    </section>
  )
}

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


// import React, { Component } from 'react';
// import axios from 'axios';
// import './Customers.css';
// import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";

// const Customer = props => {
//   const {
//     id,
//     name,
//     city,
//     state,
//     phone,
//     account_credit,
//     movies_checked_out,
//     selectCustomerCallback
//   } = props;

//   return (
//     <tr>
//       <td>{id}</td>
//       <td>{name}</td>
//       <td>{city}</td>
//       <td>{state}</td>
//       <td>{phone}</td>
//       <td>${account_credit}</td>
//       <td>{movies_checked_out}</td>
//       <td>
//         <Button
//           variant="primary"
//           type="button"
//           onClick={() => {
//             selectCustomerCallback(id);
//           }}
//         >
//           Select
//         </Button>
//       </td>
//     </tr>
//   );
// };

// Customer.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   city: PropTypes.string,
//   state: PropTypes.string,
//   phone: PropTypes.string,
//   account_credit: PropTypes.number,
//   movies_checked_out: PropTypes.number.isRequired,
// }

// export default Customer;