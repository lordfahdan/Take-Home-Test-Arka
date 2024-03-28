import { NavLink } from 'react-router-dom';
import { list_test } from '../constant';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">
        Selamat Datang di Test Assessment <b>Arka Data</b>
      </h1>
      <div className='dashboard__navigation'>
        {list_test.map((item) => (
          <NavLink to={item.link} key={item.label}>
            <div className='navigation'>
              <img className='navigation__image' src={item.image} alt="" />
              <h5 className='navigation__label'>{item.label}</h5>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
