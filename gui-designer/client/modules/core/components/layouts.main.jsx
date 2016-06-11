import React from 'react';
import Joyride from 'react-joyride';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Canvas from '../../canvas/containers/canvas.js';
import Code from '../../code/containers/code.js';
import Toolbar from '../../toolbar/containers/toolbar.js';

class Layout extends React.Component {
    constructor() {
        super();

        this.addSteps = this.addSteps.bind(this);
        this.addTooltip = this.addTooltip.bind(this);
        this.resetTour = this.resetTour.bind(this);
    }

    addSteps(steps) {
        const joyride = this.refs.joyride;
        let newSteps = steps;

        if (!Array.isArray(newSteps)) {
            newSteps = [newSteps];
        }

        if (!newSteps.length) {
            return;
        }

        this.props.addSteps(joyride.parseSteps(newSteps));
    }

    addTooltip(data) {
        this.refs.joyride.addTooltip(data);
    }

    resetTour() {
        this.refs.joyride.reset(true);
    }

    componentDidMount() {
        this.refs.joyride.start();
    }

    render() {
        return (
            <div className='main'>
                <Joyride
                    ref='joyride'
                    debug={false}
                    steps={this.props.steps}
                    type='continuous'
                    showSkipButton={true}
                    showOverlay={true}/>
                <Canvas
                    addSteps={this.addSteps}
                    addTooltip={this.addTooltip}
                    resetTour={this.resetTour}/>
                <Code
                    addSteps={this.addSteps}
                    addTooltip={this.addTooltip}
                    resetTour={this.resetTour}/>
                <Toolbar
                    addSteps={this.addSteps}
                    addTooltip={this.addTooltip}
                    resetTour={this.resetTour}/>
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(Layout);

