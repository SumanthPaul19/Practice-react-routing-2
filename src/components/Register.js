import React from 'react'
import {useForm} from 'react-hook-form'

export default function Register(){
    let {register,handleSubmit,formState:{errors}}=useForm();

    const onFormSubmit=(userObj)=>{
        console.log(userObj)
    }

    return(
        <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <label htmlFor="un" className="mt-5">Username</label>
            <input type="text" id="un" {...register('username',{required:true,minLength:5})} className="form-control mb-3" />
            {/*username validation */}
            {errors.username?.type=== 'required' && <p className="text-danger">*Username is required</p>}
            {errors.username?.type=== 'minLength' && <p className="text-danger">*Min-Length should be 5</p>}


            {/* password */}
            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" {...register('password',{required:true})} className="form-control mb-3" />
            {/*password validation */}
            {errors.password && <p className="text-danger">*Password is required</p>}

            {/* email */}
            <label htmlFor="e">Email</label>
            <input type="mail" id="e" {...register('mail',{required:true})} className="form-control mb-3" />
            {/*password validation */}
            {errors.password && <p className="text-danger">*Enter email</p>}


 
            {/* radio button */}
            <label>Select Gender</label>
            <div className="form-check">
                <input type="radio" id="m" className="form-check-input" {...register('gender')} value="male" />
                <label className="form-check-label" htmlFor="m">Male</label>
            </div>
            <div className="form-check">
                <input type="radio" id="f" className="form-check-input" {...register('gender')} value="female" />
                <label className="form-check-label mb-3" htmlFor="f">Female</label>
            </div>


        

            <button type="submit" className="btn btn-success">Register</button>
        </form>
    )
}