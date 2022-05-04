import React from 'react';
import { Grid} from 'semantic-ui-react';
import '../../../layout/style.css';
import ActivityDetails from '../details/ActivityDetails';
import ActivityItem from './ActivityItem';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../store/store';
import { observer } from 'mobx-react-lite';



export default observer(function ActivityDashboard(){

    const {activityStore} = useStore();
    const {editMode, selectedActivity} = activityStore;

    return (
        <Grid className='activity_grid'> 
            <Grid.Column  width={'9'} className='left_grid'>
                <ActivityItem  />
            </Grid.Column>

            <Grid.Column width={'7'} className='right_grid'>
                {selectedActivity && !editMode &&
                <ActivityDetails /> }

                {
                    editMode ? 
                    <ActivityForm /> : null
                }
            </Grid.Column>
        </Grid>
    )
})