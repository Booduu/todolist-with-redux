import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { setFilter, visibilityFilters } from '../store/actions';



const Filter = ( { setFilter } ) => {
    return (
        <div>
            <Button style={{ marginRight: '10px' }} onClick={ () => setFilter(visibilityFilters.SHOW_ALL)} variant="contained" color="primary">All</Button>
            <Button style={{ marginRight: '10px' }} onClick={ () => setFilter(visibilityFilters.SHOW_DONE)} variant="contained" color="primary">Done</Button>
            <Button onClick={ () => setFilter(visibilityFilters.SHOW_ACTIVE) } variant="contained" color="primary">Active</Button>
        </div>
    )
}

export default connect(null, dispatch => {
    return {
        setFilter: (filter) => { dispatch(setFilter(filter)) }
    }
})(Filter);