 /*import React from 'react'

export default function JavaScript(){
    return(
        <div>
            <h1>JavaScript Components</h1>
        </div>
    )
} 
    {Input box mannual} */

import {useState,useEffect} from 'react'


export default function Home(){
    const [formState,setFormState]=useState({
        username:'',
        city:''
    })

    const [errors,setErrors]=useState({})

    useEffect(()=>{

        if(formState.username.length>=1 && formState.username.length<=4){
            setErrors({...errors,usernameLengthError:'*Minimum Length should be 4',usernameRequiredError:''});
        }
        else if(formState.username.length>4 || (formState.username.length<1)){
            setErrors({...errors,usernameLengthError:''})
        }

        if(formState.username.length===0 && errors.usernameLengthError!=='' && errors.usernameRequiredError===''){
            setErrors({...errors,usernameRequiredError:'*Username is required',usernameLengthError:''})
        }

    },[formState.username])


    const handleBlur=(e)=>{
        if(e.target.value===''){
            setErrors({...errors,usernameRequiredError:"*Username is required"})
        }
    }

    return(
        <form className="w-50 mx-auto mt-5">
            <input type="text" 
                    name="username" 
                    className="form-control mb-3" 
                    placeholder="username" 
                    value={formState.username}
                    onBlur={handleBlur}
                    onChange={e=>{setFormState({...formState,username:e.target.value})}}
                    required/>
                    {/* required validation error */}
                    {errors.usernameRequiredError && <p className="text-danger">{errors.usernameRequiredError}</p>}
                    {/* minlen validation error */}
                    {errors.usernameLengthError && <p className="text-danger">{errors.usernameLengthError}</p>}

            <input type="text" 
                    name="city" 
                    className="form-control mb-3" 
                    placeholder="City" 
                    value={formState.city}
                    required/>
        </form>
    )

}