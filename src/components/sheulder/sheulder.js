import React from 'react';
import BodySheulder from '../body-sheulder';
import HeaderSheulder from '../header-sheulder'
import './sheulder.scss'

const Sheulder = () => {
    let data = [
        [{task:"Metanit 3, 4 глава", group:"С#", time:"23:43 - 01:44"},{task:"Metaniва", group:"С#", time:"23:43 - 01:44"} ],
        [{task:"Metanit 3, 4 глава", group:"С#", time:"23:43 - 01:44"},{task:"Metaniва", group:"С#", time:"23:43 - 01:44"}]
    ]//ajax;
    return (
        <div className="sheulder">
            <HeaderSheulder dateBegin="05.04" dateEnd="11.04" isCurrentWeek={true}/>
            <BodySheulder data={data}></BodySheulder>
        </div>
    );
};

export default Sheulder;