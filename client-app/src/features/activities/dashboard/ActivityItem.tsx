import React, { useState } from 'react'
import { Button, Item, Label } from 'semantic-ui-react'
import '../../../layout/style.css'
import { useStore } from '../../../store/store'
import { observer } from 'mobx-react-lite'


export default observer(function ActivityItem(){

    const {activityStore} = useStore();
    const {activities, loading, deleteActivity} = activityStore;
    
    const [target , setTarget] = useState('');

    function handleDeleteButton(event:any, id: string) {
        let classArray = event.target.classList
        setTarget(classArray[classArray.length-1]);
        deleteActivity(id);       
    }
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
                               <Button onClick={()=> activityStore.selectAcitivity(activity.id)} floated='right' content='View' color='blue' />
                               <Button 
                                        className={activity.id}
                                        
                                        loading={loading && target === activity.id}  
                                        onClick={(e)=> handleDeleteButton(e,activity.id)} 
                                        floated='right' 
                                        content='Delete' 
                                        color='red' />
                               <Label basic content={activity.category} />
                           </Item.Extra>
                       </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </>
    )
})