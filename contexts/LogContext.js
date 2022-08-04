import React from 'react';
import {createContext, useState} from 'react';

const LogContext = createContext('HI~~');

export function LogContextProvider({children}) {
  const [text, setText] = useState('');
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
