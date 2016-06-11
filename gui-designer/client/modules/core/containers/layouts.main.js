import {composeAll, useDeps, composeWithTracker} from 'mantra-core';
import Layout from '../components/layouts.main.jsx';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    const _steps = '_gui_designer_tour_steps';
    LocalState.setDefault(_steps, []);

    const steps = LocalState.get(_steps);
    const addSteps = (newSteps) => LocalState.set(_steps, steps.concat(newSteps));
    onData(null, { steps, addSteps });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Layout);
