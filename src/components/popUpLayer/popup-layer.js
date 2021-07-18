import React, { useEffect, useState } from 'react';
import './popup-layer.scss';

const PopUpLayer = (props) =>{
    const [isActive, setActive] = useState(false);

    function clickOnLayer(e){
        if(e.target.classList.value.indexOf("popup-layer") > 0)
            setActive(false);
    }
    
    return (
        <>
            <div className="add-item-button">
                <p onClick={() => setActive(true)}>{props.buttonText}</p>
            </div>
            <div className={isActive? "show popup-layer-wrapper": "popup-layer-wrapper"} onClick={clickOnLayer}>
                <div className="popup-layer">
                    <div>{props.children}</div>
                    <div className="close" onClick={() => setActive(false)}>X</div>
                </div>
            </div>
        </>
    );
};

export default PopUpLayer;