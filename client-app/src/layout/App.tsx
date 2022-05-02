import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import Navbar from './Navbar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);


  useEffect(()=>{
    axios.get<Activity[]>("http://localhost:5000/api/activities").then(response =>{
      setActivities(response.data);
    })
  }, [])

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
