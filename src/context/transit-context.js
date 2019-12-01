import React from 'react';

export const TransitContext = React.createContext();

export const TransitProvider = (props) => {
  const [stop, setStop] = React.useState({ route: '', direction: '', stop: '' });

  return (
    <TransitContext.Provider value={[stop, setStop]}>
      {props.children}
    </TransitContext.Provider>
  )
}