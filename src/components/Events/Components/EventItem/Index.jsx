const EventItem = ({info, name, image}) => {

    return(
        <div>
            <h4>{name}</h4>
            <p>{info}</p>
            <img src={image} alt={name} width={200} height={200}/>
        </div>
    );
};

export default EventItem;