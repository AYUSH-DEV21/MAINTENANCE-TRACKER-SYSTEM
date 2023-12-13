import React, { useState } from 'react';
import './mainpage.css';

const Reports = () => {
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
            <h1 style={{ color: 'black' }}>Reports</h1>
          </section>
          <section>
            <label htmlFor="year-select" style={{ color: 'black' }}>Select Financial Year: </label>
            <select id="year-select" onChange={(e) => showTable(e.target.value)}>
              <option value="">SELECT FY</option>
              <option value="2020-21">FY 2020-21</option>
              <option value="2021-22">FY 2021-22</option>
              <option value="2022-23">FY 2022-23</option>
              <option value="2023-24">FY 2023-24</option>
            </select>
          </section>
          <h1> </h1>
          <section className="table_body4">
            {selectedYear === "" && <div className="container financial-year-table" id="null"><table></table></div>}
            {selectedYear === "2020-21" && (
              <div className="container financial-year-table" id="table-2020-21">
                <table>
                    <thead>
                      <tr>
                        <th class="header-cell">Plant Name</th>
                        <th class="header-cell">No:Of Equipment with completed maintenance</th>
                        <th class="header-cell">No:Of Equipment with pending maintenance</th>
                        <th class="header-cell">Completion %</th>
                        <th class="header-cell">Download Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alpha</td>
                        <td>6</td>
                        <td>4</td>
                        <td>60%</td>
                        <td><button style={{width: "100%"}}>Download</button></td>
                      </tr>
                      <tr>
                        <td>Beta</td>
                        <td>10</td>
                        <td>0</td>
                        <td>100%</td>
                        <td><button style={{width: "100%"}}>Download</button></td>
                      </tr>
                      <tr>
                        <td>Gamma</td>
                        <td>10</td>
                        <td>0</td>
                        <td>100%</td>
                        <td><button style={{width: "100%"}}>Download</button></td>
                      </tr>
                      <tr>
                        <td>Zeta</td>
                        <td>7</td>
                        <td>3</td>
                        <td>70%</td>
                        <td><button style={{width: "100%"}}>Download</button></td>
                      </tr>
                      <tr>
                        <td>Delta</td>
                        <td>8</td>
                        <td>2</td>
                        <td>80%</td>
                        <td><button style={{width: "100%"}}>Download</button></td>
                      </tr>
                    </tbody>
                </table>
              </div>
            )}
            {selectedYear === "2021-22" && (
              <div className="container financial-year-table" id="table-2021-22">
                <table>
                  <thead>
                    <tr>
                      <th class="header-cell">Plant Name</th>
                      <th class="header-cell">No:Of Equipment with completed maintenance</th>
                      <th class="header-cell">No:Of Equipment with pending maintenance</th>
                      <th class="header-cell">Completion %</th>
                      <th class="header-cell">Download Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alpha</td>
                      <td>0</td>
                      <td>10</td>
                      <td>0%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Beta</td>
                      <td>5</td>
                      <td>5</td>
                      <td>50%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Gamma</td>
                      <td>10</td>
                      <td>0</td>
                      <td>100%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Zeta</td>
                      <td>7</td>
                      <td>3</td>
                      <td>70%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Delta</td>
                      <td>8</td>
                      <td>2</td>
                      <td>80%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {selectedYear === "2022-23" && (
              <div className="container financial-year-table" id="table-2022-23">
                <table>
                  <thead>
                    <tr>
                      <th class="header-cell">Plant Name</th>
                      <th class="header-cell">No:Of Equipment with completed maintenance</th>
                      <th class="header-cell">No:Of Equipment with pending maintenance</th>
                      <th class="header-cell">Completion %</th>
                      <th class="header-cell">Download Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alpha</td>
                      <td>6</td>
                      <td>4</td>
                      <td>60%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Beta</td>
                      <td>5</td>
                      <td>5</td>
                      <td>50%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Gamma</td>
                      <td>10</td>
                      <td>0</td>
                      <td>100%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Zeta</td>
                      <td>7</td>
                      <td>3</td>
                      <td>70%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Delta</td>
                      <td>0</td>
                      <td>10</td>
                      <td>0%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {selectedYear === "2023-24" && (
              <div className="container financial-year-table" id="table-2023-24">
                <table>
                  <thead>
                    <tr>
                      <th class="header-cell">Plant Name</th>
                      <th class="header-cell">No:Of Equipment with completed maintenance</th>
                      <th class="header-cell">No:Of Equipment with pending maintenance</th>
                      <th class="header-cell">Completion %</th>
                      <th class="header-cell">Download Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alpha</td>
                      <td>1</td>
                      <td>9</td>
                      <td>10%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Beta</td>
                      <td>2</td>
                      <td>8</td>
                      <td>20%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Gamma</td>
                      <td>10</td>
                      <td>0</td>
                      <td>100%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Zeta</td>
                      <td>10</td>
                      <td>0</td>
                      <td>100%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
                    </tr>
                    <tr>
                      <td>Delta</td>
                      <td>10</td>
                      <td>0</td>
                      <td>100%</td>
                      <td><button style={{width: "100%"}}>Download</button></td>
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

export default Reports;