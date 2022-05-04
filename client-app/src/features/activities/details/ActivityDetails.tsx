import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../store/store'
import { observer } from 'mobx-react-lite';


export default observer(function ActivityDetails(){
    const {activityStore} = useStore();
    const {selectedActivity: activity, cancelActivity, openForm} = activityStore;

    if(!activity) return <></>
    
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
                    <Button onClick={()=> openForm(activity.id)} positive circular>Edit</Button>
                    <Button onClick={()=> cancelActivity()} color='red' circular>Cancel</Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})