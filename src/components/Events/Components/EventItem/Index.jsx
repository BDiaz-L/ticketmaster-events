const EventItem = ({info, name, image, id, onEventClick}) => {

    return(
        <div>
            <h4>{name}</h4>
            <p>{info}</p>
            <img src={image} alt={name} width={200} height={200}/>
            <button onClick={ () => onEventClick(id)}>Ver mas </button>
        </div>
    );
};

export default EventItem;