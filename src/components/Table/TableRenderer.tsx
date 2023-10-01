import Button from "../Button/Button";
import {useEffect, useState} from "react";
import {getDataFromApi} from "../../api/Api";
import TableBase from "./TableBase";
import close from './close.svg';

interface address {
    addressGuid: String,
    fullAddress: String,
    houseNumber: String,
    region: String,
    settlementOrCity: String,
    settlementTypeOrCityType: String
    streetName: String,
    streetType: String
}
interface availability {
    conclusionForHearingDisability: String,
    conclusionForMusculoskeletalDisability: String,
    conclusionForVisionDisability: String,
    servicesConclusion: String,
    servicesMail: String,
    servicesPhone: String
}
interface serviceGroup{
    level: number,
    "serviceCode": String,
    "serviceId": number,
    "serviceName": String,
    "subServices": []
}
interface data {
    address: address,
    addressSource:String,
    availability: availability,
    businessFilters: any,
    holidays:any,
    individualFilters: any,
    isClosed: boolean,
    isTemporaryClosed: boolean,
    latitude: String,
    longitude: String,
    oktmo: String,
    oktmoName: String,
    opsService: any,
    phones: any,
    postalCode: String,
    serviceGroups: Array<serviceGroup>,
    settlement: String,
    temporaryClosedReason:String,
    typeCode:String,
    typeId: number,
    vacancies: [],
    windowsCount: number,
    workingHours: workingHours[]
}

interface workingHours{
    beginWorkTime:string,
    endWorkTime:string,
    lunches: [],
    weekDayId: number
}

export default function TableRenderer(){
    const [data,setData] = useState<Array<data>>()
    const handleData = (da:any)=>{
        setData(da)
    }

    const [index,setIndex] = useState<string>('')

    const handleIndex = (data:any) => {
        setIndex(data.currentTarget.value)
    }

    function getDataApi(index:string,handleData:any){
        setData(undefined)
        getDataFromApi(handleData,index)
    }

    useEffect(()=>{
        console.log("updated!")
        setDataRe(data)
    },[data])

    const [dataRe,setDataRe] =useState<Array<data>>()
    const [handleModal, setHandleModal] = useState(true)

    const handleShowModal=(data:any) =>{
        setHandleModal(data)
    }

    function Modal(){
        if(handleModal){
            return(
                <div className={'inp'}>
                    <h2>Поиск по индексу</h2>
                    <input placeholder={"Введите индекс почтового отделения"} value={index} onChange={handleIndex}/>
                    <Button onClick={()=>{
                        if (index != null) {
                            getDataApi(index, handleData)
                        }
                        handleShowModal(false)
                    }} label={"Найти"}/>
                </div>
            )
        }else{
            return(
                <></>
            )
        }
    }

    return(
       <>
           {Modal()}
           <div className={'div-tabl'}>
               {!handleModal ?  <button className={'close'} onClick={()=>handleShowModal(true)} value={"Закрыть"}><img src={close} alt=""/></button> : <></>}
               {!handleModal ? <TableBase data={dataRe}/> : <></>}

           </div>
       </>
    )

}
