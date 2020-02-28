import React, { Component } from 'react';

class MarkerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toogleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {
        var {title, children } = this.props;
        const { opened } = this.state;

        if(opened){
            title="Hide Vehicles";
        } else {
            title="Show Vehicles";
        }

        return(
            <div>
                <div onClick={this.toggleBox}>
                    {title}
                </div>
                {opened && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        );
    }
}

export default MarkerButton;

