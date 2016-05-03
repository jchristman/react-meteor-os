const stylesheet = cssInJS({
    button: {
        padding: 10,
        
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 7,
        
        cursor: 'pointer',

        textAlign: 'center',
        fontSize: 'large',
        color: 'black'
    },

    button_success: {
        backgroundColor: '#5CB85C',
        color: '#EEEEEE',

        ':hover': {
            backgroundColor: '#4CA84C'
        }
    },

    button_info: {
        backgroundColor: '#428BCA',
        color: '#EEEEEE',

        ':hover': {
            backgroundColor: '#327BBA'
        }
    }
});

export default stylesheet;
