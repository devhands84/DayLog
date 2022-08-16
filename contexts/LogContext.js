import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext();

export function LogContextProvider({children}) {
  const onModify = modified => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };
  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };
  const [logs, setLogs] = useState(
    [],
    // Array.from({length: 20})
    //   .map((_, index) => ({
    //     id: uuidv4(),
    //     title: ` title ${index}`,
    //     body: `content ${index}`,
    //     date: new Date().toISOString(),
    //   }))
    //   .reverse(),
  );
  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
