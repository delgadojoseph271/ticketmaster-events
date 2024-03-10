import { useNavigate } from 'react-router-dom';

import useEventsData from '../../hooks/useEventsData';
import EvenItem from './components/EventItem';

const Events = ({ searchTerm, events }) => {
        const navigate = useNavigate();

        const handleEventItemClick = (id) => {
            navigate(`/detail/${id}`);
        };

        const renderEvents= () => {
            let eventsFiltered = events
            
            if (searchTerm.length > 0 ){
                eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm))
            }
            return eventsFiltered.map((eventItem) => (
                <EvenItem 
                    key={`event-item-${eventItem.id}`}
                    name={eventItem.name}
                    info={eventItem.info}
                    image={eventItem.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={eventItem.id}
                />
            ));     
        };

    return(
        <div>
            Eventos
            {renderEvents()}
        </div>
    )
}

export default Events