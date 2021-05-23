import React,{useEffect} from 'react';

import InputMirror from "../../SearchDistrict/InputMirror";

import store from "../../Store/Store";


export default function CustomizeSearch() {

    return (

        <>

        <InputMirror store={store}/>

        </>
    )
}
