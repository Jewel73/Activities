import React, { useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import Navbar from './Navbar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/api';
import Spinner from './Spinner';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    agent.Activities.list().then(response =>{
      let activities : Activity[] =[];
      response.map(activity=>{
        activity.date = activity.date.split('T')[0]
        activities.push(activity);
      })
      setActivities(response);
      setLoading(false);
    })
  },[])

  function handleSelectActivity(id : string){
      setSelectedActivity(activities.find(a => a.id === id));
  }

  function handleCancelActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id? : string){
    console.log(activities );
    console.log(id);
    id ? handleSelectActivity(id) : handleCancelActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrUpdateActivity(activity: Activity){
    activity.id ?setActivities([...activities.filter(a => a.id !== activity.id), activity])
    : setActivities([...activities, {...activity, id: uuid()}])

    setEditMode(false);
    setSelectedActivity(activity);

  }

  function handleDeleteActivity(id: string){
    setActivities([...activities.filter(a => a.id !== id)]);
  }

  if(loading) return <Spinner />
  return (
    <div className="App">
      <Navbar formOpen = {handleFormOpen}/>
      <ActivityDashboard 
          activities={activities} 
          selectedActivity = {selectedActivity}
          selectActivity = {handleSelectActivity}
          cancelActivity = {handleCancelActivity}
          editMode = {editMode}
          formOpen = {handleFormOpen}
          formClose = {handleFormClose}
          createOrUpdateActivity = {handleCreateOrUpdateActivity}
          deleteActivity = {handleDeleteActivity}
      />
    
    </div>
  );
}

export default App;
