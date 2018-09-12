import React from 'react';

const DEFAULT_STATE = 
    {
      name: "Mitchell Trubisky",
      position: "QB",
      gif: "www.google.com"
    }
    
  

export const ThemeContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component{
    state = DEFAULT_STATE;
    


render() {
    return (
        <ThemeContext.Provider value={{
            ...this.state
        }}>{this.props.children}</ThemeContext.Provider>
    )
}
}