import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";


let sleep =(delay: number)=>{
    return new Promise(resolve =>{
        setTimeout(resolve, delay);
    })
} 

axios.defaults.baseURL= "http://localhost:5000/api";

axios.interceptors.response.use(respone => {
    return sleep(3000).then((res)=> respone);
})

const responseBody =<T>(response: AxiosResponse<T>)=> response.data; 

const request = {
    get:    <T>(url: string)=> axios.get<T>(url).then(responseBody),
    post:   <T>(url:string, data : {}) => axios.post<T>(url, data).then(responseBody),
    put :   <T>(url: string, data: {}) => axios.put<T>(url, data).then(responseBody),
    del:    <T>(url: string) => axios.delete<T>(url).then(responseBody)
}


const Activities ={
    list: ()=> request.get<Activity[]>("/activities"),
    details: (id: string) => request.get<Activity>(`/activities/${id}`),
    create: (activity: Activity)=> request.post<void>('/activities', activity),
    update: (activity: Activity) =>request.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string)=> request.del(`/activities/${id}`)
}

const agent = {
    Activities
}

export default agent;