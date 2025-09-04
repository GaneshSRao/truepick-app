import React, { useEffect } from 'react';
import './UserManagement.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import users from './UserItems.json';

const UserManagement = () => {
  useEffect(() => {
    // Initialize Materialize components after the DOM is rendered
    M.FormSelect.init(document.querySelectorAll('select'));
    M.updateTextFields();
  }, []); // The empty array ensures this effect runs only once after the initial render

  

  return (
    <div className="main-wrapper">
      <div className="container-wrapper">
        <div className="row">
          {/* Page Header */}
          <div className="hero-section center">
            <h1 className="page-title">User Management</h1>
            <p className="page-subtitle">Manage all user accounts and profiles on your platform.</p>
          </div>
          {/* User Search and Filters */}
          <div className="col s12 no-padding">
            <div className="profile-section">
              <h2 className="section-title">Search & Filter Users</h2>
              <div className="row">
                <div className="input-field col s12 m6 l4">
                  <i className="material-icons prefix">search</i>
                  <input id="user_search" type="search" className="validate" name="user_search" />
                  <label htmlFor="user_search">Search by Name, ID, Email</label>
                </div>
                <div className="input-field col s12 m6 l4">
                  <select id="filter_status" name="filter_status">
                    <option value="" disabled defaultValue>Filter by Status</option>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending Review</option>
                    <option value="disabled">Disabled</option>
                  </select>
                  <label htmlFor="filter_status">Status</label>
                </div>
                <div className="input-field col s12 m6 l4">
                  <select id="filter_gender" name="filter_gender">
                    <option value="" disabled defaultValue>Filter by Gender</option>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label htmlFor="filter_gender">Gender</label>
                </div>
                <div className="col s12 filter-buttons-container">
                  <a href="#" className="primary-action-btn waves-effect waves-light">
                    Apply Filters <i className="material-icons right">filter_list</i>
                  </a>
                  <a href="#" className="waves-effect waves-light secondary-action-btn">
                    Reset Filters <i className="material-icons right">clear</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Add New User Button */}
            <div className="col s12 m4 l2 right">
              <a href="#" className="waves-effect waves-light primary-action-btn right">
                Add New User <i className="material-icons right">person_add</i>
              </a>
            </div>
          </div>
          {/* User List Table */}
          <div className="col s12 no-padding">
            <div className="profile-section">
              <h2 className="section-title">User List</h2>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Last Login</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>
                        <span className={`status-chip ${user.status}`}>{user.status}</span>
                      </td>
                      <td>{user.lastLogin}</td>
                      <td>
                        <a href="#" className="action-btn"><i className="material-icons">edit</i></a>
                        <a href="#" className="action-btn delete"><i className="material-icons">delete</i></a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination Controls */}
              <div className="pagination-controls">
                <a href="#" className="pagination-link disabled">
                  <i className="material-icons">chevron_left</i>
                </a>
                <a href="#" className="pagination-link active">1</a>
                <a href="#" className="pagination-link">2</a>
                <a href="#" className="pagination-link">3</a>
                <a href="#" className="pagination-link">4</a>
                <a href="#" className="pagination-link">
                  <i className="material-icons">chevron_right</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;