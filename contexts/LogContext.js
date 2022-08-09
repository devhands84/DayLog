import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext();

export function LogContextProvider({children}) {
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
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
