import React, {useState,useEffect} from 'react'
import { baseUrl } from '../environment';
import AddDevice from './AddDevice';
import Device from './Device';


const Devices = (props) => {

  const [devices, setDevices] = useState([]);

  useEffect(() => {getData()}, [] );


  const getData = async () =>{
    if(props.userToken){
      await fetch(`${baseUrl}/web/device/${props.userToken}`,{
        method:'GET', 
        mode: 'cors'
      })
      .then((response) => {
        if(response.status === 200)
          return response.json();
      })
      .then((data)=>{
          if(data){
              setDevices(
                  data 
              )
            }
          
          
      })
      .catch(err => {console.log(err)})
    }
  }

  const changeStatus = async (deviceStatusChangerObject) =>{

    if(props.userToken){
      await fetch(`${baseUrl}/web/device/status/${deviceStatusChangerObject.deviceToken}/${Number(!deviceStatusChangerObject.status)}`,{
        method:'GET', 
        mode: 'cors'
      })
      .then((response) => {
        if(response.status === 200){
          getData();
          return response.json();
        }
      })
      .catch(err => {console.log(err)})
    }
  }

  

  const createNewDevice = async () => 
  {

      await fetch(`${baseUrl}/web/device/create/${props.userToken}`,
      {
        method:"POST",
        mode: "cors",
        body: {},
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Accept': 'application/json'
        }
        
      })
      .then((response) => {
          alert(`Device ${response} has been created`);
          getData();
          props.onFormSwitch("loggedIn");
      })
      .catch(err => {console.log(err)})

  } 
    
  

  return (
      <div className='container'>
        <div className="container py-5">
              <div className="row text-center text-white mb-5">
                  <div className="col-lg-12 mx-auto">
                      <h1 className="display-4" style={{color: "black"}}>User Token <strong>{props.userToken}</strong></h1>
                  </div>
                  <div className="col-lg-12 mx-auto">
                      <h2 className="display-4" style={{color: "black"}}>Device List</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-8 mx-auto">
                      <ul className="list-group shadow">
                          <AddDevice createNewDevice = {createNewDevice} />
                          {
                            devices.map ? 
                              devices.map((device)=>{
                                    return (<Device device = {device} changeStatus = {changeStatus}/>)
                                }) : []
                          }
                        
                      </ul>
                  </div>
              </div>
        </div>
      </div>
      
  )
}


export default Devices;