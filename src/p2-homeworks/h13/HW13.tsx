import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./api/api";

const Request = () => {
    const [status, setStatus] = useState(false)
    const statusCheckbox = (status: boolean) => {
        setStatus(status)
    }
    const onClickRequest = () => {
        RequestsAPI.ignatiusServer(status)
            .then(res => console.log(res))
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })

    }
    return (
        <div style={{paddingLeft: '20px'}}>
            <div>HW13</div>
            <SuperButton onClick={onClickRequest}>Request</SuperButton>
            <br/>
            <SuperCheckbox onChangeChecked={statusCheckbox}>click me</SuperCheckbox>
        </div>
    );
};

export default Request;