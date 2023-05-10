export function handleTimeChange(event, startTime, finishTime) {
    const timeValue = event.target.value;
    const [hours, minutes] = timeValue.split(':').map(Number);
    if (minutes % 5 !== 0) {
        if (minutes < 55) {
            const roundedMinutes = Math.round(minutes / 5) * 5;
            const roundedTimeValue = `${hours}:${roundedMinutes.toString().padStart(2, '0')}`;
            event.target.value = roundedTimeValue;
        } else {
            const nextHour = hours + 1;
            const roundedTimeValue = `${nextHour}:00`;
            event.target.value = roundedTimeValue;
        }
    }
    if (finishTime.current.value < startTime.current.value) {
        finishTime.current.value = startTime.current.value
    }
}