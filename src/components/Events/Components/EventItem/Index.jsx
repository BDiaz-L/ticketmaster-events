const EventItem = ({info, name, image, id, onEventClick}) => {

    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id);
    };

    return(
        <div onClick={()=> {console.log('padre clicleado')}}>
            <h4>{name}</h4>
            <p>{info}</p>
            <img src={image} alt={name} width={200} height={200}/>
            <button onClick={handleSeeMoreClick}>Ver mas </button>
        </div>
    );
};

export default EventItem;