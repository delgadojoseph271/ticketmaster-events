import styles from "./EventItem.module.css";

import useLikeEvents from "../../../../hooks/useLikeEvents";
import HearthFilled from '../../../../assets/icons/hearth-filled.png'
import HearthUnFilled from '../../../../assets/icons/hearth-unfilled.png'

const EvenItem = ( { info, id, name, image, onEventClick  }) => {
    const { isEventLiked, toggleEventsLike } = useLikeEvents(id)

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id)
        }

    const handleHearthClick = () => {
        toggleEventsLike();
    };

    return (
        <div onClick={ () => console.log('padre clickeado')} className={styles.eventItemContainer}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked ? HearthFilled : HearthUnFilled} alt="Heart button" className={styles.hearthImage} onClick={handleHearthClick}/>
                <img src={image} alt={name} width={200} height={200} />
            </div>
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={ handleSeeMoreClick} className={styles.seeMoreBtn}>Ver mas</button>
                {/*<Link to={ `/detail/${id}` } >
                    Ver mas
                </Link>*/}
                Ver mas
            </div>
          </div>
    );
};

export default EvenItem;