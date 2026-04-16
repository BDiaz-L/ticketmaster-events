import EventItem from "./Components/EventItem/Index";
import data from "../../data/events.json"


const events = data._embedded.events;

const Events = ({searchTerm}) => {

    const handleEventClick = (id) => {
        console.log('Evento clicleado: '+ id);
    };

    const renderEvents = () => {
        let eventFiltered = events;
        if (searchTerm.length > 0) {
            eventFiltered = eventFiltered.filter((iteam) => iteam.name.toLocaleLowerCase().includes(searchTerm))
        }
        return eventFiltered.map((event)=> (
            <EventItem
                key={`event-iteam-${event.id}`}
                info={event.info}
                name={event.name}
                image={event.images[0].url}
                id={event.id}
                onEventClick={handleEventClick}
            />

        ));
    };
    
    return (
        <div>
            Eventos
            {renderEvents()}
        </div>

    );
};

export default Events;