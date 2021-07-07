import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => {
  return (
      <div className="nav">
          <div className="item "><NavLink exact to='/' activeClassName="active">Расписание</NavLink></div>
          <div className="item"><NavLink to='/group' activeClassName="active">Группы</NavLink></div>
          <div className="item"><NavLink to='/analyse' activeClassName="active">Аналитика</NavLink></div>
      </div>
  );
};

export default Nav;