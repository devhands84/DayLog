import {format} from 'date-fns';
import React, {useContext, useState, useMemo} from 'react';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function CanenderScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectedDate={setSelectedDate}
        />
      }
    />
  );
}

export default CanenderScreen;
