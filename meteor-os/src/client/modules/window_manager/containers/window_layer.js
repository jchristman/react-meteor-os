import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {ReactiveVar} from 'meteor/reactive-var';
import WindowLayer from './window_layer_drop.js';

const composer = ({layerHiddenVar}, onData) => {
    const layerHidden = layerHiddenVar.get();
    onData(null, { layerHidden });
}

const depsMapper = (context) => {
    const layerHiddenVar = new ReactiveVar(true);
    const hideLayer = () => layerHiddenVar.set(true);
    const unhideLayer = () => layerHiddenVar.set(false);
    return {
        layerHiddenVar,
        hideLayer,
        unhideLayer,
        context: () => context
    }
}

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(WindowLayer);
