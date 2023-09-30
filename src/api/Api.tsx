import axios from "axios";

export function getDataFromApi(handle:any,index:string){
    //`http://localhost:25585/main/${index}`
    axios.get(`http://foxworld.online:25603/main/${index}`).then((value) =>{
        handle(value.data)
    })
}
