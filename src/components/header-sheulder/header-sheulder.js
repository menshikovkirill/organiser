import React from 'react';

import './header-sheulder.scss';

const HeaderSheulders = ({dateBegin, dateEnd, isCurrentWeek}) => {
  return (
     <div className="header-sheulders">
         <div className="switcher-week">
            <div className="switchers left"><div></div></div>
            <div className="dates">{dateBegin} - {dateEnd}</div>
            <div className="switchers right"><div></div></div>
         </div>
         <div className={isCurrentWeek? "current-week active": "current-week"}>текущая неделя</div>
     </div>
  );
};

export default HeaderSheulders;