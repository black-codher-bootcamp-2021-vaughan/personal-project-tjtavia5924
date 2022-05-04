import react, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, useParams} from "react-router-dom";


//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
import {getProfile, updateProfile } from "../services/profileService";


function UpdateContacts(){
    
   const {id} = useParams()
   console.log('This is id',id)

   const [val, setVal] = useState({
      first_name: "",
      last_name: "",
      DOB : "",
      address: "",
      tel_No : "",
      email_address: "",
      siblings: false,
      children : 0,
      likes : "",
      dislikes: "",
      occupation: "",
      first_met: "",
      Last_contacted: "",
      estimated_date_for_next_contact: "",
      photo: ""
   });

   const [profile, setProfile] = useState("");

    useEffect(() => {
    //here need to implement requests to get the addresses. Get profiles is just an example
    async function getSpecifiedProfile() {
      if (!profile) {
         // const params = useParams()
         //console.log('This is params',params.id)
         const response = await getProfile(id);
         // setProfile(response);
         setProfile(response);
      }
    }

        getSpecifiedProfile();
    }, [profile]);
     

  

   function handleChange(event){
       const {name, value} = event.target;
       setVal(prevValue => {
        return{
            ...prevValue,
            [name]: value
        }
       });
   }

   async function createUser(event){
    event.preventDefault();

    const updatedProfile =  {
        first_name: val.first_name,
        last_name: val.last_name,
        DOB : val.DOB,
        address: val.address,
        tel_No : val.tel_No,
        email_address: val.email_address,
        siblings: val.siblings,
        children : val.children,
        likes : val.likes,
        dislikes: val.dislikes,
        occupation: val.occupation,
        first_met: val.first_met,
        Last_contacted: val.Last_contacted,
        estimated_date_for_next_contact: val.estimated_date_for_next_contact,
        photo:val.photo
    }

    //console.log('This is updated profile', updatedProfile);
    window.location = 'http://localhost:3000';

    try {
      const response = await updateProfile(id, updatedProfile)
      console.log(response)
    } catch (event) {
      alert(event)
    }
    
  }

const renderProfile = (profile) => {
    return(
        <section>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-4 custom text-center">
                                    <img src={profile.photo} 
                                    onError={event => {
                                    event.target.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                    event.onerror = null
                                    }}
                                    alt="profile" 
                                    className="img-fluid my-3" 
                                    key={profile._id}
                                    style={{width: 190}} />
                                    <h5>{`${profile.first_name}
                                    ${profile.last_name}`}</h5>
                                    <p>{profile.occupation}</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                    <h3>Information</h3>
                                    <hr />
                                    <div className="row pt-1">
                                        <div className="col-4 mb-3">
                                            <h6>Address</h6>
                                            <p className="text-secondary">{profile.address}</p>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <h6>Phone</h6>
                                            <p className="text-secondary">{profile.tel_No}</p>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <h6>Date of Birth</h6>
                                            <p className="text-secondary">{profile.DOB}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <br />
                                    <div className="row pt-1">
                                        <div className="col-4 mb-3">
                                            <h6>Email</h6>
                                            <p className="text-secondary">{profile.email_address}</p>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <h6>Last Contacted</h6>
                                            <p className="text-secondary">{profile.lContacted}</p>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <h6>Next Meet Up</h6>
                                            <p className="text-secondary">{profile.estimated_date_for_next_contact}</p>
                                        </div>
                                    </div>

                                    <div className="row pt-1">
                                        <div className="col-4 mb-3">
                                            <h6>Number of Siblings</h6>
                                            <p className="text-secondary">{profile.siblings}</p>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <h6>Has children</h6>
                                            <p className="text-secondary">{profile.children ? 'Yes' : 'No'}</p>
                                        </div>
                                        <div className="col-4 mb-3">
                                            <h6>Where you first met</h6>
                                            <p className="text-secondary">{profile.firstMet}</p>
                                        </div>
                                    </div>

                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Likes</h6>
                                            <p className="text-secondary">{profile.likes}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Dislikes</h6>
                                            <p className="text-secondary">{profile.dislikes}</p>
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



   return(    
   <div className='container contact-form'>
      <div>
        <h1>This is the current profile</h1>
       {renderProfile(profile)}
     </div>
   
    <form>
      <h1>Update contact</h1>
      <h4>Please note you need to include all information you want to update AND keep the same</h4>
      
      <div className='container-fluid'>
        
        <div className="row">
          <div className="col">
            <div className="form-outline">
              <input type="text" value={val.first_name} onChange={handleChange}  className="form-control" name="first_name" placeholder="First name" />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" value={val.last_name} onChange={handleChange} id="form8Example2" className="form-control" name="last_name" placeholder="Last name" />
              
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col">
            <div className="form-outline">
              <input type="email" value={val.email_address} onChange={handleChange} id="form8Example3" className="form-control" name="email_address" placeholder='Email'/>
              
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" value={val.DOB} onChange={handleChange} id="form8Example4" className="form-control" name="DOB" placeholder='Date of Birth - DD/MM/YYYY'/>
              
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="tel" value={val.tel_No} onChange={handleChange} id="form8Example5" className="form-control" name='tel_No' placeholder='Telephone number' />
              
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-outline mb-4">
              <textarea value={val.address} onChange={handleChange} className="form-control" id="form4Example3" rows="4" name='address' placeholder="Address"></textarea>
              
            </div>
          </div>
          <div className="col">
            <div className="form-outline mb-4">
              <label className="form-label">Has Children</label>
              <select value={val.children} name='children' onChange={handleChange} className="form-select" id="inlineFormSelectPref">
                
                <option value="true">True</option>
                <option value="false">False</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
            <div className="col">
              <div className="form-outline">
                <input value={val.siblings} onChange={handleChange} type="number" id="typeNumber" className="form-control" name='siblings' placeholder="Number of siblings"/>
                
              </div>
            </div>
          </div>

        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-outline">
              <input value={val.occupation} onChange={handleChange} type="text" id="form8Example3" className="form-control" name='occupation' placeholder="Occupation"/>
              
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input value={val.first_met} onChange={handleChange} type="text" id="form8Example4" className="form-control" name='first_met' placeholder="First met" />
              
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input value={val.Last_contacted} onChange={handleChange} type="text" id="form8Example5" className="form-control" name='Last_contacted' placeholder="Last contacted - DD/MM/YYYY"/>
              
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-outline mb-6">
              <textarea value={val.likes} onChange={handleChange} className="form-control" id="form4Example3" rows="6" name='likes' placeholder='What things do they like?'></textarea>
              
            </div>
          </div>
          <div className="col">
            <div className="form-outline mb-6">
              <textarea value={val.dislikes} onChange={handleChange} className="form-control" id="form4Example3" rows="6" name="dislikes" placeholder='What things do they dislike?'></textarea>
              
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-group">
            {/* <label className="form-label">Has Children</label> */}
              <select value={val.photo} name='photo' onChange={handleChange} className="form-control form-select show-menu-arrow" data-width="auto" placeholder="Choose one of the following...">
                  <option data-hidden="true">Choose Option</option>
                  <option value="\man_1.png">Image of man 1</option>
                  <option value="\woman_1.png">Image of woman 1</option>
                  <option value="\man_2.png">Image of man 2</option>
                  <option value="\woman_2.png">Image of woman 2</option>
                </select>
           </div>   
          </div>
          <div className="col">
            <div className="form-outline">
              <input value={val.estimated_date_for_next_contact} onChange={handleChange} type="text" id="form8Example2" className="form-control" name='estimated_date_for_next_contact' placeholder="Next dat of contact - DD/MM/YYYY"/>
              
            </div>
          </div>
        </div>
        <br />
        <button type="button" onClick={createUser} className="btn btn-primary">Submit Updated profile</button>
      </div>
    </form>
  </div>
   )
}

   export default UpdateContacts;

  //  maybe have a cancel button in case it's pressed in error