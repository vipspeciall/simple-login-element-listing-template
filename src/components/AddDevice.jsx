import React from 'react'

const AddDevice = (props) => {

  return (
    <div>
        <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">NEW DEVICE</h5>
                            <p className="font-italic text-muted mb-0 small">CREATED DATE</p>
                            <p className="font-italic text-muted mb-0 small">UPDATED DATE</p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <h6 className="font-weight-bold my-2">STATUS</h6>
                                <ul className="list-inline small">
                                    <input type="button" value="Create New Device" onClick={props.createNewDevice}/>
                                </ul>
                            </div>
                        </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
        
    </div>
    
  )
}

export default AddDevice