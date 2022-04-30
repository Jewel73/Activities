import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/activities").then(response =>{
      console.log(response);
      setActivities(response.data);
    })
  }, [])


  return (
    <div className="App">
      <Header as='h2' icon="users" content='Hello'/>
      <List>
        {activities.map((activity: any)=> (
          <List.Item>{activity.title}</List.Item>
        ))}
      </List>
     
    </div>
  );
}

export default App;
