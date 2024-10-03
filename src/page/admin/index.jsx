import './index.css';
import hairSalonLogo from '../../assets/images/HairSalon.png'; 

const Admin = () => {
  const stats = [
    { title: 'Total Static Page', count: 4, color: 'blue' },
    { title: 'Total Slider', count: 15, color: 'orange' },
    { title: 'Total Team', count: 70, color: 'red' },
    { title: 'Total Services', count: 20, color: 'green' },
    { title: 'Total Portfolio', count: 30, color: 'darkblue' },
    { title: 'Total User', count: 50, color: 'pink' },
    { title: 'Total Enquiries', count: 65, color: 'lightgreen' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="logo-container">
          <img src={hairSalonLogo} alt="Hair Salon Logo" className="sidebar-logo" />
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Page Management</li>
          <li>Metadata</li>
          <li>Slider Management</li>
          <li>Team Management</li>
          <li>Services Management</li>
          <li>Portfolio Management</li>
          <li>Enquiry Management</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Dashboard</h1>
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color}`}>
              <h3>{stat.count}</h3>
              <p>{stat.title}</p>
              <button>More info</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
