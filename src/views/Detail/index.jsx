//import { useState } from "react";
//import { useParams } from "react-router-dom";
import { format } from "date-fns";

//import useEventsResult from "../../state/events-results";
import eventFetcher from '../../utils/fetchEvents';
import styles from './Detail.module.css'

console.log(window.location)
const pathame = window.location.pathname

console.log(pathame.substring(8, pathame.length) )
const resource = eventFetcher(pathame.substring(8, pathame.length))
const Detail = () => {
    // const {data} = useEventsResult()
    // const { eventId } = useParams();
    //const [eventData, setEventData] = useState({});
    const eventData = resource.eventDetail.read();

    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} className={styles.eventImage} alt={eventData.name} />
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.infoParagraph}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ? <p className={styles.dateParagraph}>{format(new Date(eventData.dates?.start.dateTime),'dd/MM/yyyy')}</p> : null }
            </div>
            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMapTitle}>Mapa del Evento</h6>
                <img src={eventData.seatmap?.staticUrl} alt="Seatmap event" />
                <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangeLegend}> Rango de precios: {eventData.priceRanges?.[0].min}-{eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</p>
            </div>
            <a href={eventData.url}>
                Ir por tus boletos
            </a>
        </div>
    );
}
export default Detail;