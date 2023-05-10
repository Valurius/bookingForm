import React from 'react';
{/*Методы для вывода options у select'ов */ }  
export function getFloorOptions() {
    {/*Создание options для select'a этажей */ } 
    let options = [];
    options.push(<option key={0} value="Этаж">Этаж</option>);
    for (let i = 3; i <= 27; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
}

export function getRoomOptions() {
    {/*Создание options для select'a переговорных */ } 
    let options = [];
    options.push(<option key={0} value="Переговорная">Переговорная</option>);
    for (let i = 1; i <= 10; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
}