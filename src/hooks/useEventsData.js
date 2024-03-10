import {  useState  } from 'react';

import eventsJSON from '../data/events.json';
import useEventsResult from '../state/events-results';

const  useEventsData = () => {
    const{data, isLoading, error, fetchEvents} = useEventsResult()
    console.log(data)
    return {
        events : data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents,
    };
};

export default useEventsData;