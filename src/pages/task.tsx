import axios from "axios"
import { useEffect, useState } from "react";

const fetchTask = async () => {
    const res = await axios.get(
        'https://localhost:3000/task'
    );
    return res
};

export default function TaskPage(){
    const [tasks,setTasks] = useState<any>()
    
    useEffect(()=> {
        fetchTask().then((task)=> setTasks(task))
    }, [])
    return(
        <div>Task App in NestJS ans NextJS</div>
    )
}