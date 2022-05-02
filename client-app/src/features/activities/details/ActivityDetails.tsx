import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props{
    activity: Activity;
    cancelActivity: ()=> void;
    formOpen : (id:string)=> void;

}

export default function ActivityDetails({activity, cancelActivity, formOpen} : Props){
    return (
        <Card fluid className='activity_details'>
            <Image src={`./assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    {activity.date}
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra >
                <Button.Group widths={2}>
                    <Button onClick={()=> formOpen(activity.id)} positive circular>Edit</Button>
                    <Button onClick={()=> cancelActivity()} color='red' circular>Cancel</Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}