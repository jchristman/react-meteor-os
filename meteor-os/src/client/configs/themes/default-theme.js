const theme = cssInJS({
    primary_font: {
        fontFamily: '"Courier New", Courier, monospace',
    },

    primary_font_size: {
        fontSize: '1em'
    },

    primary_colors: {
        backgroundColor: '#D6D2D0',
        borderColor: '#898688',
        color: '#898688',
    },

    primary_colors_hover: {
        ':hover': {
            backgroundColor: '#EEEEEE',
            borderColor: '#362922',

            ':before': {
                boxShadow: '2px 2px 0 #EEEEEE'
            },

            ':after': {
                boxShadow: '-2px 2px 0 #EEEEEE'
            }
        }
    },

    primary_colors_focus: {
        color: '#362922'
    },

    primary_colors_pseudo: {
        ':before': {
            borderColor: '#898688'
        },

        ':after': {
            borderColor: '#898688'
        }
    },

    primary_text_shadow: {
        textShadow: '1px 1px 1px #AAAAAA',
    },

    primary_text_shadow_focus: {
        textShadow: '1px 1px 1px #888888'
    },

    primary_box_shadow_pseudo: {
        ':before': {
            boxShadow: '2px 2px 0 #D6D2D0'
        },

        ':after': {
            boxShadow: '-2px 2px 0 #D6D2D0'
        }
    },

    secondary_colors: {
        backgroundColor: 'white',
        borderColor: '#9B9DC9',
        color: '#362922'
    }
});

export default theme;
