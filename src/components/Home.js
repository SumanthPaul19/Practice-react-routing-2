import {useState} from 'react'

export default function Home(){

    //Radio button declaration
    const[location,setLocaction]=useState([])
    let offshore=['Chennai','Bangalore','Hyderabad','Pune','Kochi']
    let onshore=['US','Non-US']
    

    const handleChangeOffshore=()=>{
        setLocaction(offshore)
    }

    const handleChangeOnshore=()=>{
        setLocaction(onshore)
    }

    //Checkboxes declaration
    let [skills, setSkills] = useState([
        { name: "HTML5,CSS3,JS", value: false },
        { name: "SASS", value: false },
        { name: "ES5,ES6,ES7...", value: false },
        { name: "Bootstrap 4", value: false },
        { name: "Anugular 8", value: false },
        { name: "React JS", value: false },
        { name: "Veu JS", value: false },
        { name: "TypeScript", value: false },
        { name: "Express JS", value: false },
        { name: "Node JS", value: false },
        { name: "Mongo DB", value: false },
    ])

    const handleCheck=(ind)=>{
        let skillsArr=[...skills]
        skillsArr[ind].value=!skillsArr[ind].value;
        setSkills(skillsArr)
    }



    return(
        <div className="container mt-5">
            <form>
            <input type="text" className="form-control mb-4 w-100" placeholder="Associate Name"/>

            <input type="number" className="form-control mb-4 w-100" placeholder="Associate Id"/>

            <input type="text" className="form-control mb-4 w-100" placeholder="Project Id"/>

            {/* Radio buttons */}
            <input type="radio" name="location" id="l" onChange={handleChangeOffshore}/>
           <label htmlFor="l">Offshore</label>

           <input type="radio" name="location" id="l" className="ms-3" onChange={handleChangeOnshore}/>
           <label htmlFor="l" >Onshore</label>

           <br/>

           <select name="loc" className="w-100">
               {
                   location.map((lv,ind)=>{
                       return(
                           <option value="" key={ind}>{lv}</option>
                       )
                   })
               }
           </select>

           <br/><br/>

           {/* Checkbox */}
           <div className="row">
           {
                skills.map((skillObj,ind)=>{
                    return (
                        <div className="col col-md-4">
                            <div className="form-check" key={ind}>
                            <input type="checkbox"
                                        onChange={()=>handleCheck(ind)}
                                        id={skillObj.name}
                                        className="form-check-input" />
                            <label htmlFor={skillObj.name} className="form-check-label">{skillObj.name}</label>
                            </div>
                        </div>
                    )
                })
            }
           </div>

            {/* input file */}
            <label htmlFor="f" className="mt-4">Uplaod Profile</label>
            <input type="file" id="f" className="form-control mt-1 w-100" placeholder="Choose a file" />

            {/* TextArea */}
            <textarea className="form-control mt-4 w-100" placeholder="Comments" />

            {/* Buttons */}
            <button type="submit" className="btn btn-primary mt-5">Submit</button>
            <button type="reset" className="btn btn-danger mt-5 ms-1">Reset</button>
            
        </form>
        <br/>
        </div>
    )
}