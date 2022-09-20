import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./api/api";

const Request = () => {
    const [status, setStatus] = useState(false)
    const [response, setResponse] = useState('')
    const statusCheckbox = (status: boolean) => {
        setStatus(status)
    }
    const onClickRequest = () => {
        RequestsAPI.ignatiusServer(status)
            .then(res => {
                console.log(res)
                setResponse(res.data.errorText)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                if(error.response){
                    setResponse(error.response.data.errorText)
                }
            })

    }
    return (
        <div style={{paddingLeft: '20px'}}>
            <span>HW13</span><span> - {response}</span>
            <br/>
            <SuperButton onClick={onClickRequest}>Request</SuperButton>
            <br/>
            <SuperCheckbox onChangeChecked={statusCheckbox}>click me</SuperCheckbox>
        </div>
    );
};

export default Request;