import React, {useEffect, useState} from "react";
import "./Table.scss"
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

interface serviceGroup {
    level: number,
    "serviceCode": String,
    "serviceId": number,
    "serviceName": String,
    "subServices": []
}

interface data {
    address: address,
    addressSource: String,
    availability: availability,
    businessFilters: any,
    holidays: any,
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
    temporaryClosedReason: String,
    typeCode: String,
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

interface props {
    data: Array<data> | undefined
}

function TableBase(props: props) {

    const [data, setData] = useState<Array<data>>()
    const handleData = (data: any) => {
        setData(data)
    }

    useEffect(() => {
        console.log(props.data)
        console.log("??")
        handleData(undefined)
        handleData(props.data)
    }, [props.data])

    if(data !== null && data !== undefined){
        return (
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow" >
                        <div className={"divTableCell"}>
                            Индекс
                        </div>
                        <div className={"divTableCell"}>
                            Адрес почтового отделения
                        </div>
                        <div className={"divTableCell"}>
                            График работы
                        </div>
                    </div>
                    {data?.map((value) => {
                        return (
                            <div className="divTableRow" key={value.typeId}>
                                <div className={"divTableCell"}>
                                    {value.postalCode}
                                </div>
                                <div className={"divTableCell"}>
                                    {value.address.fullAddress}
                                </div>
                                <div className={"divTableCell"}>
                                    {value.workingHours.length > 0 ? value.workingHours.map((elem) =>{
                                        return (elem.weekDayId)
                                    }) : "нет данных"}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }else{
        return(
            <>
                Загрузка
            </>
        )
    }
}

export default TableBase;
