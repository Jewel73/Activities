import { observer } from 'mobx-react-lite';
import React, {useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../store/store';




export default observer(function ActivityForm(){
    const {activityStore} = useStore();
    const {selectedActivity, loading, closeForm, createOrUpdateActivity} = activityStore;
    
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    };

    const [activity, setActivity] = useState(initialState);

    function handleOnInputChange(event: any){
        console.log("helo");
        
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }


    return (
        <Segment clearing className='activity_form'>
            <Form onSubmit={()=>createOrUpdateActivity(activity)}>
                <Form.Input value={activity.id} name = 'id' onChange={handleOnInputChange} disabled />
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleOnInputChange} ></Form.Input>
                <Form.Input placeholder='Description' value={activity.description}  name='description' onChange={handleOnInputChange}></Form.Input>
                <Form.Input placeholder='Category' value={activity?.category} name='category' onChange={handleOnInputChange}></Form.Input>
                <Form.Input type='date' placeholder='Date' value={activity?.date} name='date' onChange={handleOnInputChange}></Form.Input>
                <Form.Input placeholder='City' value={activity?.city} name='city' onChange={handleOnInputChange}></Form.Input>
                <Form.Input placeholder='Venue' value={activity?.venue} name='venue' onChange={handleOnInputChange}></Form.Input>
                <Button loading={loading} floated='right' type='submit' positive content={activity.id ? "Update" : "Create"}/>
                <Button onClick={closeForm} floated='right' type='submit' color='red' content='Cancel'/>

            </Form>
        </Segment>
    )
})