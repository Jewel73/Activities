import React from 'react'
import { Button, Card, Icon, Image, Item, ItemContent, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../models/activity'
import '../../../layout/style.css'

interface Props {
    activities: Activity[];
    selectActivity:(id : string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityItem({activities, selectActivity, deleteActivity}: Props){
    return (
        <>
            <Item.Group className='item_group'>
                {activities.map(activity =>(
                    <Item key={activity.id} className='activity_item'>
                       <Item.Content>
                           <Item.Header as='a' >{activity.title}</Item.Header>
                           <Item.Meta>{activity.date}</Item.Meta>
                           <Item.Description >
                               <div>{activity.description}</div>
                               <div>{activity.city} , {activity.venue}</div>
                           </Item.Description>

                           <Item.Extra>
                               <Button onClick={()=> selectActivity(activity.id)} floated='right' content='View' color='blue' />
                               <Button onClick={()=> deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                               <Label basic content={activity.category} />
                           </Item.Extra>
                       </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </>
    )
}