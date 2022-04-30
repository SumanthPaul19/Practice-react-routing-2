import  { useState } from 'react'

export default function Html(){
    
    //radio buttons
    const[location,setLocaction]=useState([])
    let offshore=['Chennai','Bangalore','Hyderabad','Pune','Kochi']
    let onshore=['US','Non-US']

    const handleChangeOffshore=()=>{
        setLocaction(offshore)
    }

    const handleChangeOnshore=()=>{
        setLocaction(onshore)
    }

    return(
        <div>
           <input type="radio" name="location" id="l" onChange={handleChangeOffshore}/>
           <label htmlFor="l">Offshore</label>

           <input type="radio" name="location" id="l" className="ms-5" onChange={handleChangeOnshore}/>
           <label htmlFor="l" >Onshore</label>

           <br/>

           <select name="loc" className="w-75">
               {
                   location.map((lv,ind)=>{
                       return(
                           <option value="" key={ind}>{lv}</option>
                       )
                   })
               }
           </select>
           <h1>I'm Fucked up</h1>
        </div>
    )
}