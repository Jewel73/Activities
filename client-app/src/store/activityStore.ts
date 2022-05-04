import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/api";
import { Activity } from "../models/activity";
import {v4 as uuid} from 'uuid';


export default class ActivityStore{
     activities: Activity[]  = [];
     selectedActivity: Activity | undefined  = undefined;
     editMode : boolean = false;
     loading: boolean = false;
     initialLoadding: boolean = true;


     constructor(){
         makeAutoObservable(this);
     }


    loadActivities = async ()=>{
        this.setInitialLoadding(true);
        try {
            let activities = await agent.Activities.list();
            runInAction(()=>{
                activities.forEach(activity=>{
                    activity.date = activity.date.split('T')[0]
                    this.activities?.push(activity);
                })
            })
            this.setInitialLoadding(false);
        } catch (error) {
            console.log(error);
            this.setInitialLoadding(false);
        }
        
    }

    createActivity = async (activity: Activity)=>{
        this.setLoadding(true);
        try {
            activity.id = uuid();
            await agent.Activities.create(activity);
            runInAction(()=>{
                this.activities = [...this.activities, activity];
            })
            this.setLoadding(false);
            this.closeForm();
            this.selectAcitivity(activity.id);
        } catch (error) {
            console.log(error);
            this.setLoadding(false);
        }
    }

    updateActivity = async (activity: Activity)=>{
        this.setLoadding(true);
        try {
            await agent.Activities.update(activity);
            runInAction(()=>{
                this.activities = [...this.activities.filter(a=> a.id !== activity.id), activity];
            })
            this.setLoadding(true);
            this.closeForm();
            this.selectAcitivity(activity.id);
        } catch (error) {
            console.log(error);
            
            this.setLoadding(true);
        }

    }

    createOrUpdateActivity =(activity: Activity)=>{
        activity.id ? this.updateActivity(activity) : this.createActivity(activity);
    }


    deleteActivity = async (id: string)=>{
        this.setLoadding(true);

        try {
            await agent.Activities.delete(id);
            runInAction(()=>{
                this.activities = [...this.activities.filter(a => a.id !== id)]
            })
            this.setLoadding(false);
        } catch (error) {
            this.setLoadding(false);
        }

    }

    selectAcitivity = (id: string)=>{
        console.log("selected");
        this.selectedActivity = this.activities.find(a => a.id===id); 
    }
    cancelActivity = ()=>{
        this.selectedActivity = undefined; 
    }

    setInitialLoadding = (val : boolean)=>{
        this.initialLoadding = val;
    }

    setLoadding=(val: boolean)=>{
        this.loading = val;
    }


    openForm = (id? : string)=>{
        id ? this.selectAcitivity(id) : this.cancelActivity();
        this.editMode = true;
    }

    closeForm= ()=>{
        this.editMode = false;
    }
}