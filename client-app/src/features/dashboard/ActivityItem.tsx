import React from 'react'
import { Button, Card, Icon, Image, Item, ItemContent, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../models/activity'
import '../../layout/style.css'

interface Props {
    activities: Activity[]
}

export default function ActivityItem({activities}: Props){
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
                               <Button floated='right' content='View' color='blue' />
                               <Label basic content={activity.category} />
                           </Item.Extra>
                       </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </>
    )
}