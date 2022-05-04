import React, { useEffect } from 'react';
import Navbar from './Navbar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import Spinner from './Spinner';
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(()=>{
    activityStore.loadActivities();
  },[activityStore])

  if(activityStore.initialLoadding) return <Spinner />
  return (
    <div className="App">
      <Navbar/>
      <ActivityDashboard />
    </div>
  );
}

export default observer(App);
