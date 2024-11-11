import React from 'react';
import { FaFan, FaLightbulb, FaSnowflake, FaPlug } from 'react-icons/fa';
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const stats = [
    { name: 'Fans', count: 27, power: 270, icon: <FaFan />, color: '#4caf50' },
    { name: 'Light', count: 65, power: 876, icon: <FaLightbulb />, color: '#ff9800' },
    { name: 'Refrigerator', count: 4, power: 0, icon: <FaPlug />, color: '#03a9f4' },
    { name: 'Air Conditioner', count: 852, power: 65, icon: <FaSnowflake />, color: '#9c27b0' }
  ];

  const powerConsumptionData = [
    { name: 'Heater', value: 2095 },
    { name: 'Lights', value: 2360 }
  ];


  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 
    datasets: [
      {
        label: 'Power Consumption (kWh)',
        data: [210, 150, 180, 130, 170, 200, 220], 
        borderColor: '#03a9f4', 
        backgroundColor: 'rgba(3, 169, 244, 0.2)', 
        tension: 0.4, 
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Power Analytics</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Layouts</a></li>
          <li><a href="#">Mailbox</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">UI Demands</a></li>
          <li><a href="#">Forms</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Tables</a></li>
          <li><a href="#">Charts</a></li>
          <li><a href="#">Maps</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </aside>

      <div className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <input type="text" placeholder="Search here..." />
        </header>

        <div className="stats-cards">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: item.color }}>
                {item.icon}
              </div>
              <div className="stat-info">
                <h4>{item.name}</h4>
                <p>Count: {item.count}</p>
                <p>Power Consumption: {item.power}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="charts-container">
          <div className="chart">
            <h3>Power Consumption</h3>
            <Line data={data} /> 
          </div>

          <div className="current-power">
            <h3>Current Power Consumption (kWh)</h3>
            <p>1635.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
