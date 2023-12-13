import React from 'react';
import './mainpage.css';

function Dashboard() {
  const logout = () => {
    alert("Logging out.");
    window.location.href = "/login";
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
                <h1 style={{ color: 'black' }}>Dashboard</h1>
              </section>
              <section className="table_body">
                <div className="container">
                  <table>
                    <thead>
                      <tr>
                        <th className="header-cell">Plant Name</th>
                        <th className="header-cell">Equipment name</th>
                        <th className="header-cell">Emp ID</th>
                        <th className="header-cell">Status</th>
                        <th className="header-cell">Deadline</th>
                        <th className="header-cell">Equipment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alpha</td>
                        <td>1</td>
                        <td>001</td>
                        <td>Upcoming</td>
                        <td>10/12/2023</td>
                        <td>2/4</td>
                      </tr>
                      <tr>
                        <td>Alpha</td>
                        <td>5</td>
                        <td>002</td>
                        <td>Upcoming</td>
                        <td>10/09/2023</td>
                        <td>2/4</td>
                      </tr>
                      <tr>
                        <td>Beta</td>
                        <td>2</td>
                        <td>003</td>
                        <td style={{ color: 'yellow' }}>Due</td>
                        <td>10/12/2023</td>
                        <td>3/4</td>
                      </tr>
                      <tr>
                        <td>Gamma</td>
                        <td>1</td>
                        <td>004</td>
                        <td style={{ color: 'yellow' }}>Due</td>
                        <td>30/11/2023</td>
                        <td>2/4</td>
                      </tr>
                      <tr>
                        <td>Zeta</td>
                        <td>3</td>
                        <td>001</td>
                        <td style={{ color: 'red' }}>Overdue</td>
                        <td>20/11/2023</td>
                        <td>3/4</td>
                      </tr>
                      <tr>
                        <td>Delta</td>
                        <td>5</td>
                        <td>002</td>
                        <td style={{ color: 'green' }}>Completed</td>
                        <td>28/11/2023</td>
                        <td>4/4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;