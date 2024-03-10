import wrapPromise from './wrapPromise'

const fetchEventsDetail = async (eventId) => {
    try {
        const response = await fetch(`http://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
        const data = await response.json()

        return data;
    } catch (error) {
        console.log(error)
    }
};


const fetchData = (eventId) => {
    return {
        eventDetail: wrapPromise( fetchEventsDetail(eventId))
    }
};

export default fetchData;