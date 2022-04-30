import {useForm} from 'react-hook-form'

export default function FormHook(){

    let {register,handleSubmit,formState:{errors}}=useForm();

    const onFormSubmit=(userObj)=>{
        console.log(userObj)
    }

    return(
        <form className="w-50 mx-auto mt-5 mb-5" onSubmit={handleSubmit(onFormSubmit)}>
            <h2 className="text-primary">#Form Validation using Hook-Form</h2>
            {/* username */}
            <label htmlFor="un">Username</label>
            <input type="text" id="un" {...register('username',{required:true,minLength:5})} className="form-control mb-3"  />
            {/*username validation */}
            {errors.username?.type=== 'required' && <p className="text-danger">*Username is required</p>}
            {errors.username?.type=== 'minLength' && <p className="text-danger">*Min-Length should be 5</p>}


            {/* password */}
            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" {...register('password',{required:true})} className="form-control mb-3" />
            {/*password validation */}
            {errors.password && <p className="text-danger">*Password is required</p>}

            {/* radio button */}
            <label>Select Gender</label>
            <div className="form-check">
                <input type="radio" id="m" className="form-check-input" {...register('gender',{required:true})} value="male" />
                <label className="form-check-label" htmlFor="m">Male</label>
            </div>
            <div className="form-check">
                <input type="radio" id="f" className="form-check-input" {...register('gender',{required:true})} value="female" />
                <label className="form-check-label mb-3" htmlFor="f">Female</label>
            </div>
            {errors.gender && <p className="text-danger">*This field is required/Select Gender</p>}

            {/* Address */}
            <label>Address</label>
            <input type="text" id="ad" {...register('address',{required:true,minLength:15})} className="form-control mb-3"/>
            {/* address validation */}
            {errors.address?.type==='required' && <p className="text-danger">*Please Enter address</p>}
            {errors.address?.type==='minLength' && <p className="text-danger">*Minimum Length should be 15</p>}

            {/*select city*/}
            <label htmlFor="ct">City</label>
            <select id="ct" type="city"  {...register('city',{required:true})} className="form-select mb-3" >
                <option value="hyd">Hyderabad</option>
                <option value="chni">Chennai</option>
                <option value="nd">Noida</option>
                <option value="goa">Goa</option>
            </select>
            {errors.city && <p className="text-danger">*Select Location</p>}

            {/* Pincode */}
            <label>Pincode</label>
            <input type="number" id="pn" {...register('pincode',{required:true})} className="form-control mb-3"/>
            {/* pincode validation */}
            {errors.pincode && <p className="text-danger">*Please enter pincode here</p>}


             {/* Textarea */}
            <label >Text Area</label>
            <textarea {...register('textarea',{required:true,minLength:10})} className="form-control mb-3" />
            {/* Textarea validation */}
            {errors.textarea?.type==='required' && <p className="text-danger">*Text is required</p>}
            {errors.textarea?.type==='minLength' && <p className="text-danger">*Minimum length should be 10</p>}
 
            

           
 

            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit(onFormSubmit)} >Submit</button>
        </form>
    )
}