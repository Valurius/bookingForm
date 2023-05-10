import React, { useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import MyForm from '../UI/Submit';
import { handleTimeChange } from '../UI/TimeChange';
import { getFloorOptions, getRoomOptions } from '../UI/Option';
import  Reset  from '../UI/Reset';


registerLocale('ru', ru);

const MainPage = () => {
    /*Создаем переменные */ 
    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const startTime = useRef()  
    const finishTime = useRef()
    const tower = useRef()
    const floor = useRef()
    const room  = useRef()
    const comment = useRef()
    
    /*Создаем объект с данными */ 
    let result = {      
            startDate,
            startTime,
            finishTime,
            tower,
            floor,
            room,
            comment
    }
    /*Метод записи данных в JSON формат и вывод их в консоль */ 
    const handleFormSubmit = (result) => {
        console.log(JSON.stringify(result));
    }

    return (
        <div>
            <div className="container">
                {/*Input'ы */ }                                                     
                        <div className="__form">
                        <label htmlFor="datepicker">Дата</label>
                        <DatePicker className='__datePicker' type="text" id="datepicker" selected={startDate} dateFormat="dd MMMM yyyy" locale="ru" onChange={(date) => setStartDate(date)}/>
                        </div>

                        <label>Время начала и конца кратное 5-ти минутам <br/> (При выборе неправильного времени оно исправится автоматически)</label> 
                        <div className='__formTimes'>                                                                                              
                        <input className="__formTime" type='time' id="startTime" ref={startTime} onChange={(event) => handleTimeChange(event, startTime, finishTime)}></input>             

                        <label> — </label> 
               
                        <input className="__formTime" type='time' ref={finishTime} onChange={(event) => handleTimeChange(event, startTime, finishTime)} ></input>                                                                        
                {/*Select'ы */ }                                                                                                                         
                        </div>
                        <div className="__form"> 
                        <label htmlFor="towerSelect">Башня</label>                       
                        <select id="towerSelect" className="__select" ref={tower}>
                            <option value="Башня">Башня</option>
                            <option value="А">А</option>
                            <option value="Б">Б</option>
                        </select>
                        </div>

                        <div className="__form"> 
                        <label htmlFor="floorSelect">Этаж</label>
                        <select id="floorSelect" className="__select" ref={floor}>     
                        {/*Используем метод для получения options для select'a этажей */ }                      
                            {getFloorOptions()}
                        </select>
                        </div>

                        <div className="__form"> 
                        <label htmlFor="roomSelect">Переговорная</label>
                        <select id="roomSelect" className="__select" ref={room}>
                        {/*Используем метод для получения options для select'a переговорных */ }
                            {getRoomOptions()}
                        </select>  
                        </div>                  
                    <div>

                {/*Textarea для комментария */ }  
                    <div className="__form">
                        <label htmlFor="comment">Комментарий</label>
                        <textarea id="comment" className="__comment" ref={comment}></textarea>
                        </div>
                    </div>
                {/*Кнопки */ }  
                    <div className='__btns'>
                    {/*Кнопка подтверждения */ }
                    <MyForm
                        data={result} 
                        onSubmit={handleFormSubmit}
                    />  
                    {/*Кнопка очистки */ }
                    <Reset
                        setStartDate={setStartDate}
                        data={result}
                    />          
                    </div>                              
            </div> 
        </div>     
    );
};

export default MainPage;