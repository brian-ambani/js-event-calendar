// selectors


// EventListeners



// functions

const drawBlankCalendar = () => {
    for (let i = 0; i<35; i++){
        const day = document.createElement('div');
        day.classList.add('day');

        const dayText = document.createElement('p');
        dayText.classList.add('day-text');

        const dayNumber = Document.createElement('p');
        dayNumber.classList.add('day-number');

        const eventName = document.createElement('small');
        eventName.classList.add('event-name');
    }   
}