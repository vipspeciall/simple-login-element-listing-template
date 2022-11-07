import React from 'react'

const Device = (props) => {
  return (
        

        <div>
            <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">DEVICE {props.device.deviceId}</h5>
                            <p className="font-italic text-muted mb-0 small">CREATED AT: {props.device.createdAt}</p>
                            <p className="font-italic text-muted mb-0 small">UPDATED AT: {props.device.updatedAt}</p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <h6 className="font-weight-bold my-2" style={props.device.status ? {color:"green"}: {color:"red"}}>STATUS: {props.device.status ? "Active" : "Inactive"}</h6>
                                <ul className="list-inline small">
                                    <input type="button" value="Change Status" onClick={() => {props.changeStatus({"status": props.device.status,"deviceToken": props.device.deviceId})}}/>
                                </ul>
                            </div>
                        </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
        </div>
  )
}

export default Device