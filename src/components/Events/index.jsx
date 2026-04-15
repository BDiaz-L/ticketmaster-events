import EventItem from "./Components/EventItem/Index";
import data from "../../data/events.json"


const events = data._embedded.events;

const Events = () => {

    const handleEventClick = (id) => {
        console.log('Evento clicleado: '+ id);
    };
    
    const eventsComponent = events.map((event)=> (
        <EventItem
            key={`event-iteam-${event.id}`}
            info={event.info}
            name={event.name}
            image={event.images[0].url}
            id={event.id}
            onEventClick={handleEventClick}
        />

    ));
    return (
        <div>
            Eventos
            {eventsComponent}
        </div>

    );
};

export default Events;