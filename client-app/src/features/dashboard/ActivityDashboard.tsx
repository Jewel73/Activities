import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Activity } from '../../models/activity';
import '../../layout/style.css';
import ActivityItem from './ActivityItem';
import ActivityCard from './ActivityItem';

interface Props{
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props){

    return (
        <Grid className='activity_grid'> 
            <Grid.Column  width={'9'} className='left_grid'>
                <ActivityItem  activities = {activities} />
            </Grid.Column>
        </Grid>
    )
}