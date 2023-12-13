import React from 'react';
import './mainpage.css';

function TaskManagement() {
  const logout = () => {
    alert("Logging out.");
    window.location.href = "/login";
  };

  const showConfirmation = () => {
    alert('Maintenance scheduled successfully!');
  };

  const showConfirmation2 = () => {
    alert('Maintenance re-scheduled successfully!');
  };

  return (
    <div>
      <section id="home" className="section">
        <div className="home-container">
          <header>
            <div className="header">
              <div className="logo">
                <h1 style={{ color: 'blue' }}>TATA STEEL</h1>
              </div>
              <nav>
                <ul>
                  <li><a href="/dashboard" style={{ color: 'black' }}>Dashboard</a></li>
                  <li><a href="/equipmentdetails" style={{ color: 'black' }}> Equipment Details </a></li>
                  <li><a href="/task_management" style={{ color: 'black' }}>Task Management</a></li>
                  <li><a href="/reports" style={{ color: 'black' }}>Reports</a></li>
                </ul>
              </nav>
              <div className="logout">
                <button onClick={logout} style={{width: "100%",padding:"5px"}}>Logout</button>
              </div>
            </div>
          </header>
        </div>
      </section>
      <div className="parallax-container">
        <div className="emp_det">
          <main className="table">
            <section id="Dashboard" className="section">
              <section className="table_header">
                <h1 style={{ color: 'black' }}>Maintenance Scheduling</h1>
              </section>
              <div className="emp_det3">
                <section id="allotment" className="section3">
                  <section className="table_body3">
                    <div className="container">
                      <table>
                        <thead>
                          <tr>
                            <th className="header-cell">Plant name</th>
                            <th className="header-cell">Equipment Name</th>
                            <th className="header-cell">Assign Date</th>
                            <th className="header-cell">Emp ID</th>
                            <th className="header-cell">Confirm</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <label>Select Plant </label>
                              <select id="year-select">
                                <option>Alpha</option>
                                <option>Beta</option>
                                <option>Gamma</option>
                                <option>Zeta</option>
                                <option>Delta</option>
                              </select>
                            </td>
                            <td>
                              <label>Select Equipment </label>
                              <select id="equipment-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </select>
                            </td>
                            <td><input type="date" size="30" className="form-control" /></td>
                            <td>
                              <label>Select Employee ID </label>
                              <select>
                                <option>001</option>
                                <option>002</option>
                                <option>003</option>
                                <option>004</option>
                                <option>005</option>
                                <option>006</option>
                                <option>007</option>
                                <option>008</option>
                              </select>
                            </td>
                            <td><button onClick={showConfirmation} style={{width: "100%"}}>Confirm</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </section>
              </div>
              <div className="emp_det3">
                <section id="allotment" className="section3">
                  <section className="table_header3">
                    <h1 style={{ color: 'black' }}>Maintenance Re-Scheduling</h1>
                  </section>
                  <section className="table_body3">
                    <div className="container">
                      <table>
                        <thead>
                          <tr>
                            <th className="header-cell">Plant name</th>
                            <th className="header-cell">Equipment Name</th>
                            <th className="header-cell">Assigned Date</th>
                            <th className="header-cell">Edit Date</th>
                            <th className="header-cell">Emp ID</th>
                            <th className="header-cell">Confirm</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Alpha</td>
                            <td>4</td>
                            <td>25-11-2023</td>
                            <td><input type="date" size="30" className="form-control" /></td>
                            <td>
                              <label>Select Employee ID </label>
                              <select>
                                <option>001</option>
                                <option>002</option>
                                <option>003</option>
                                <option>004</option>
                                <option>005</option>
                                <option>006</option>
                                <option>007</option>
                                <option>008</option>
                              </select>
                            </td>
                            <td><button onClick={showConfirmation2} style={{width: "100%"}}>Confirm</button></td>
                          </tr>
                          <tr>
                            <td>Beta</td>
                            <td>5</td>
                            <td>26-11-2023</td>
                            <td><input type="date" size="30" className="form-control" /></td>
                            <td>
                              <label>Select Employee ID</label>
                              <select>
                                <option>001</option>
                                <option>002</option>
                                <option>003</option>
                                <option>004</option>
                                <option>005</option>
                                <option>006</option>
                                <option>007</option>
                                <option>008</option>
                              </select>
                            </td>
                            <td><button onClick={showConfirmation2} style={{width: "100%"}}>Confirm</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </section>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default TaskManagement;