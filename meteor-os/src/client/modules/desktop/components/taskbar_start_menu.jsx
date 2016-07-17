import React from 'react';
import FontAwesome from 'react-fontawesome';

const TaskbarStartMenu = (props) => {
    return (
        <div className={stylesheet.default}>
            {
                props.items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={stylesheet.item}
                            onClick={ () => props.itemClick(item.name) }>
                            {item.name}&nbsp;&nbsp;&nbsp;<FontAwesome name={ item.type === 'pkg' ? 'caret-right' : 'play-circle' }/>
                        </div>
                    );
                })
            }
            <div className={stylesheet.divider}></div>
            <div className={stylesheet.item}>
                Sign Out&nbsp;&nbsp;&nbsp;<FontAwesome name='sign-out'/>
            </div>
        </div>
    );
}

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        bottom: '100%',
        left: 0,
        minWidth: 160,

        backgroundColor: '#111111',
        color: '#EEEEEE',

        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#EEEEEE',

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

        display: 'flex',
        flexDirection: 'column'
    },

    item: {
        padding: 10,
        cursor: 'pointer',
        
        ':hover': {
            backgroundColor: '#222222'
        },

        ':first-child': {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
        },

        ':last-child': {
            borderBottomRightRadius: 10
        }
    },

    divider: {
        width: '100%',
        border: '1px solid #EEEEEE',
        height: 0
    }
});

export default TaskbarStartMenu;
