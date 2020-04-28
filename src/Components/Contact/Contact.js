import React, { Component } from "react";
import { Consumer } from "../../Context";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (error) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h1>
                {name}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ color: "red", float: "right", cursor: "pointer" }}
                />
                <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      corsor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h1>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
// const nameStyle = {
//   color: "blue",
//   textTransform: "uppercase"
// };
