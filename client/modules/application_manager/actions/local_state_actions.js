const windowManagerUpdate = (context, updatedWindow) => {
    const {LocalState} = context;
    console.log('Updating window', context, updatedWindow);
}

export default { 
    windowManagerUpdate
};
