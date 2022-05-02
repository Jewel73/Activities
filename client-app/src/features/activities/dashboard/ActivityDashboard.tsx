import React from 'react';
import { Grid} from 'semantic-ui-react';
import { Activity } from '../../../models/activity'
import '../../../layout/style.css';
import ActivityDetails from '../details/ActivityDetails';
import ActivityItem from './ActivityItem';
import ActivityForm from '../form/ActivityForm';

interface Props{
    activities: Activity[];
    selectedActivity : Activity | undefined;
    editMode : boolean;

    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    formOpen : (id: string)=> void;
    formClose : () => void;
    createOrUpdateActivity: (activity: Activity)=> void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, 
    cancelActivity, editMode, formOpen, formClose, createOrUpdateActivity, deleteActivity}: Props){

    return (
        <Grid className='activity_grid'> 
            <Grid.Column  width={'9'} className='left_grid'>
                <ActivityItem  
                    activities = {activities} 
                    selectActivity = {selectActivity} 
                    deleteActivity = {deleteActivity}
                />
            </Grid.Column>

            <Grid.Column width={'7'} className='right_grid'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelActivity = {cancelActivity}
                    formOpen = {formOpen}
                    /> }

                {
                    editMode ? 
                    <ActivityForm 
                        activity={selectedActivity} 
                        formClose = {formClose}
                        createOrUpdateActivity = {createOrUpdateActivity}
                    /> : null
                }

            </Grid.Column>
        </Grid>
    )
}