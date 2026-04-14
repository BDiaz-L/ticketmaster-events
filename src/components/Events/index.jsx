import EventItem from "./Components/EventItem/Index";
import data from "../../data/events.json"
const Events = () => {

    console.log(data);
    return (
        <div>
            Eventos
            <EventItem/>
        </div>

    );
};

export default Events;