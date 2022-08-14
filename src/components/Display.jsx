import React, {Component} from 'react';
import Singers from './Singers';

class Display extends Component {
    render() {


  return (
    <div>
        <h1>☎️ Téléphone, the group ! ☎️</h1>
        <Singers name="Jean-Louis Aubert" age="67 ans"/>
        <Singers name="Richard Kolinka" age="69 ans"/>
        <Singers name="Louis Bertignac" age="68 ans"/>
        <Singers name="Corinne Marienneau" age="70 ans"/>
    </div>
        )
    }
}

export default Display;
