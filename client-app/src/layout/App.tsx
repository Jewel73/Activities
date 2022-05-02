import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import Navbar from './Navbar';
import ActivityDashboard from '../features/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(()=>{
    axios.get<Activity[]>("http://localhost:5000/api/activities").then(response =>{
      console.log(response);
      setActivities(response.data);
    })
  }, [])


  return (
    <div className="App">
      <Navbar />
      <ActivityDashboard activities={activities} />
    
    </div>
  );
}

export default App;
