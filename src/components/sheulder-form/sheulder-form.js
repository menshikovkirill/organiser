import React, { useState } from 'react';
import './sheulder-form.scss';

const GroupItem = ({index, name, isActive, onClickItem}) =>{
    return (
        <div className={isActive? "active group-item": "group-item"}  onClick={() => onClickItem(index)}>
            <span>{name}</span>
        </div>
    )
}

const SheulderForm = () => {
    const dataName = ["С#", "Учёба", "Web"] //ajaxs

    const [indexActiveItem, setIndexActiveItem] = useState(0);
    const [nameTask, setName] = useState("");
    const [contentTask, setContent] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [succefulAdding, setSucceful] = useState(false);
    const [errorAdding, setError] = useState(false);


    function onClickItem(index){
        setIndexActiveItem(index);
    }

    function createNewItem(){
        setError(false);
        setSucceful(false);
        if(!nameTask || !contentTask ||  !dateFrom || !dateTo)
            setError(true);
        else
            setSucceful(true);
    }

    return (
        <div className="sheulder-form">
            <p className={!succefulAdding? "hidden succeful-adding": "succeful-adding"}>Новая запись успешно добавлена!</p>
            <p className={!errorAdding? "hidden error-adding": "error-adding"}>Введите данные корректно!</p>
            <p className="title">Добавление нового дела</p>
            <div className="groups-list">
                <p>Группа: </p>
                {dataName.map((elem, ind) => 
                    <GroupItem key={ind} name={elem} index={ind} isActive={indexActiveItem == ind} onClickItem={onClickItem}/>
                )}
            </div>
            <div className="name-task">
                <input type="text" placeholder="Название задачи" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="content-task">
                <textarea placeholder="Комментарий" onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <div className="datapicker-inputs">
               <p>Начать:</p> <input type="text" className="date-from" placeholder="дд.мм.гг" onChange={e => setDateFrom(e.target.value)}/>
            </div>
            <div className="datapicker-inputs">
                <p>Закончить:</p> <input type="text" className="date-to" placeholder="дд.мм.гг" onChange={e => setDateTo(e.target.value)}/>
            </div>
            <div className="add-item-button" onClick={createNewItem}>
                <p>Создать</p>
            </div>
        </div>
    )
};

export default SheulderForm;