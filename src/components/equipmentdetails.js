import React, { useState } from 'react';
import './mainpage.css';

const Equipmentdetails = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const logout = () => {
    alert("Logging out.");
    window.location.href = "/login";
  };

  const showTable = (year) => {
    setSelectedYear(year);
  }

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
      <div className="emp_det4">
        <section id="review-reports" className="section4">
          <section className="table_header4">
            <h1 style={{ color: 'black' }}>Equipmentdetails</h1>
          </section>
          <section>
            <label htmlFor="year-select" style={{ color: 'black' }}>Select Plant: </label>
            <select id="year-select" onChange={(e) => showTable(e.target.value)}>
              <option value="">SELECT PLANT</option>
              <option value="alpha">Alpha</option>
              <option value="beta">Beta</option>
              <option value="gamma">Gamma</option>
              <option value="zeta">Zeta</option>
              <option value="delta">Delta</option>
            </select>
          </section>
          <h1> </h1>
          <section className="table_body4">
            {selectedYear === "" && <div className="container financial-year-table" id="null"><table></table></div>}
            {selectedYear === "alpha" && (
              <div className="container financial-year-table" id="table-alpha">
                <table>
                    <thead>
                      <tr>
                        <th class="header-cell">Equipment name</th>
                        <th class="header-cell">Total no:of maintenances required(per annum)</th>
                        <th class="header-cell">No:of maintenances completed</th>
                        <th class="header-cell">No:of maintenances pending</th>
                        <th class="header-cell">Financial Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A</td>
                        <td>4</td>
                        <td>4</td>
                        <td>0</td>
                        <td>2020-21</td>
                      </tr>
                      <tr>
                          <td>B</td>
                          <td>4</td>
                          <td>2</td>
                          <td>2</td>
                          <td>2020-21</td>
                      </tr>
                      <tr>
                          <td>C</td>
                          <td>4</td>
                          <td>1</td>
                          <td>3</td>
                          <td>2020-21</td>
                      </tr>
                      <tr>
                          <td>D</td>
                          <td>4</td>
                          <td>3</td>
                          <td>1</td>
                          <td>2020-21</td>
                      </tr> 
                    </tbody>
                </table>
              </div>
            )}
            {selectedYear === "beta" && (
              <div className="container financial-year-table" id="table-beta">
                <table>
                <thead>
                  <tr>
                      <th class="header-cell">Equipment name</th>
                      <th class="header-cell">Total no:of maintenances required(per annum)</th>
                      <th class="header-cell">No:of maintenances completed</th>
                      <th class="header-cell">No:of maintenances pending</th>
                      <th class="header-cell">Financial Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>E</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>F</td>
                      <td>4</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>G</td>
                      <td>4</td>
                      <td>1</td>
                      <td>3</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>H</td>
                      <td>4</td>
                      <td>3</td>
                      <td>1</td>
                      <td>2020-21</td>
                  </tr> 
                </tbody>
                </table>
              </div>
            )}
            {selectedYear === "gamma" && (
              <div className="container financial-year-table" id="table-gamma">
                <table>
                <thead>
                  <tr>
                      <th class="header-cell">Equipment name</th>
                      <th class="header-cell">Total no:of maintenances required(per annum)</th>
                      <th class="header-cell">No:of maintenances completed</th>
                      <th class="header-cell">No:of maintenances pending</th>
                      <th class="header-cell">Financial Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>I</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>J</td>
                      <td>4</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>K</td>
                      <td>4</td>
                      <td>1</td>
                      <td>3</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>L</td>
                      <td>4</td>
                      <td>3</td>
                      <td>1</td>
                      <td>2020-21</td>
                  </tr> 
                </tbody>
                </table>
              </div>
            )}
            {selectedYear === "zeta" && (
              <div className="container financial-year-table" id="table-zeta">
                <table>
                <thead>
                  <tr>
                      <th class="header-cell">Equipment name</th>
                      <th class="header-cell">Total no:of maintenances required(per annum)</th>
                      <th class="header-cell">No:of maintenances completed</th>
                      <th class="header-cell">No:of maintenances pending</th>
                      <th class="header-cell">Financial Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>M</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>N</td>
                      <td>4</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>O</td>
                      <td>4</td>
                      <td>1</td>
                      <td>3</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>P</td>
                      <td>4</td>
                      <td>3</td>
                      <td>1</td>
                      <td>2020-21</td>
                  </tr> 
                  </tbody>
                </table>
              </div>
            )}
            {selectedYear === "delta" && (
              <div className="container financial-year-table" id="table-delta">
                <table>
                <thead>
                  <tr>
                      <th class="header-cell">Equipment name</th>
                      <th class="header-cell">Total no:of maintenances required(per annum)</th>
                      <th class="header-cell">No:of maintenances completed</th>
                      <th class="header-cell">No:of maintenances pending</th>
                      <th class="header-cell">Financial Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Q</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>R</td>
                      <td>4</td>
                      <td>2</td>
                      <td>2</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>S</td>
                      <td>4</td>
                      <td>1</td>
                      <td>3</td>
                      <td>2020-21</td>
                  </tr>
                  <tr>
                      <td>T</td>
                      <td>4</td>
                      <td>3</td>
                      <td>1</td>
                      <td>2020-21</td>
                  </tr> 
                </tbody>
                </table>
              </div>
            )}
          </section>
        </section>
      </div>
    </div>
  );
}

export default Equipmentdetails;