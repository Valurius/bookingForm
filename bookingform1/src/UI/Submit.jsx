import React from 'react';
import MyButton from './Components/MyButton';
/*Метод (кнопка) подтверждения */ 
export default function MyForm({ data, onSubmit }) {
    const { startDate, startTime, finishTime, tower, floor, room, comment } = data;

    const handleSubmit = () => {
        /*Получаем значения */ 
        const { value: startTimeValue } = startTime.current;
        const { value: finishTimeValue } = finishTime.current;
        const { value: towerValue } = tower.current;
        const { value: floorValue } = floor.current;
        const { value: roomValue } = room.current;
        const { value: commentValue } = comment.current;

        /*Создаем переменные условий для проверки */ 
        const isTimeValid = finishTimeValue !== startTimeValue;
        const isTowerValid = tower.current.value !== "Башня";
        const isFloorValid = floor.current.value !== "Этаж";
        const isRoomValid = room.current.value !== "Переговорная";

        /*Проверка данных перед записью в JSON */ 
        if (isTimeValid && isTowerValid && isFloorValid && isRoomValid) {
            /*Если все хорошо записываем значения */ 
            const result = {
                startDate: startDate.toLocaleDateString('ru-RU'),
                startTime: startTimeValue,
                finishTime: finishTimeValue,
                tower: towerValue,
                floor: floorValue,
                room: roomValue,
                comment: commentValue
            }
            onSubmit(result);
        } else {
            /*Alert на случай, если что-то введено неправильно или еще не выбрано */ 
            alert("Вы что-то не указали, либо время выбрано некорректно")
        }
    }

    return (
        <MyButton onClick={handleSubmit}>Подтвердить</MyButton>
    );
}