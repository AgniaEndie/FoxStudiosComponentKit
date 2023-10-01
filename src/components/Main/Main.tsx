import TableRenderer from "../Table/TableRenderer";
import {Footer} from "../Footer/Footer";
import React from "react";
import {Cap} from "../Cap/Cap";

export default function Main() {
    return (
        <>
            <Cap/>
            <TableRenderer/>
            {/*<About/>*/}
            <Footer/>
        </>
    )
}
