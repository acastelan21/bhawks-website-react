import React from 'react';
import {ThemeContext} from "./providers";

export default class Consumer extends React.Component {
    render(){
        const {children} = this.props;
        return(
            <ThemeContext.Consumer>
                {(context)=>(
                    <p>{context[0].name}</p>
                )}
            </ThemeContext.Consumer>
        )
    }
}
