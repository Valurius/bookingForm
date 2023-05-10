import React from 'react'
import MyButton from './Components/MyButton';
{/*Метод (кнопка) очистки полей */ } 
const Reset = ({ setStartDate,data }) => {
    const { startTime, finishTime, tower, floor, room, comment } = data;
    const handleClick = () => {    
        {/*Задаем данным начальные значения */ }    
        setStartDate(new Date(Date.now()))
        startTime.current.value = ""
        finishTime.current.value = ""
        tower.current.value = "Башня"
        floor.current.value = "Этаж"
        room.current.value = "Переговорная"
        comment.current.value = ""
    }

    return <MyButton onClick={handleClick}>Очистить форму</MyButton>
}

export default Reset
