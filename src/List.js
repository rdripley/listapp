import React, { Component } from 'react';
import FlipMove from "react-flip-move";

class List extends Component {
    constructor(props) {
        super(props);

        this.createNames = this.createNames.bind(this);
    }
    createNames(name) {
        return <li 
                    onClick={() => this.delete(name.key)}
                    key={name.key}>{name.text}
                </li>
    }

    delete(key) {
        this.props.delete(key);
    }
    
    render() {
        var listEntries = this.props.entries;
        var listNames = listEntries.map(this.createNames);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listNames}
                </FlipMove>
            </ul>
        );
    }
};

export default List;