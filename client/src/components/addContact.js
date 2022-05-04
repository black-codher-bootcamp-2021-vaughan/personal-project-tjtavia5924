import react, {useEffect, useState, Component} from 'react';

import { postProfile } from "../services/profileService";


function AddContacts(){

   const [val, setVal] = useState({
    first_name: "",
    last_name: "",
    DOB : "",
    Address: "",
    tel_No : "",
    email_address: "",
    siblings: "",
    children : true,
    likes : "",
    dislikes: "",
    occupation: "",
    first_met: "",
    Last_contacted: "",
    estimated_date_for_next_contact: "",
    photo: ""
   });

   //the function below is to make sure that the previous value is not overwritten/discarded.  This allows the form to be fully filled out.
   function handleChange(event){
       const {name, value} = event.target;
       setVal(prevValue => {
        return{
            ...prevValue,
            [name]: value
        }
       });
   }



    async function handleSubmit(event){ // await until submit button is pressed
        event.preventDefault();
        const profile = { 
        first_name: val.first_name,
        last_name: val.last_name,
        DOB:val.DOB,
        address: val.address,
        tel_No: val.tel_No,
        email_address: val.email_address,
        siblings: val.siblings,
        children: val.children,
        likes: val.likes,
        dislikes: val.dislikes,
        occupation: val.occupation,
        first_met: val.first_met,
        Last_contacted: val.Last_contacted,
        estimated_date_for_next_contact: val.estimated_date_for_next_contact,
        photo: val.photo
      }
        
        try {  // test to see if this function works
          const response = await postProfile(profile)
          //console.log(response)
        } catch (event) {
          alert(event)
        }
        setVal({
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
        })


  }

  return(<div className='container contact-form'>
    <form onSubmit={handleSubmit}>
      <h1>Add contact</h1>
      <div className='container-fluid'>
        <div className="row">
          <div className="col">
            <div className="form-outline">
              <input type="text" value={val.first_name} onChange={handleChange} id="form8Example1" className="form-control" name="first_name" placeholder="First name" />
              
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
                <option value="false">False</option>
                <option value="true">True</option>
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
              <input value={val.first_met} onChange={handleChange} type="text" id="form8Example4" className="form-control" name='first_met' placeholder="First meet" />
              
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
              <input value={val.estimated_date_for_next_contact} onChange={handleChange} type="text" id="form8Example2" className="form-control" name='estimated_date_for_next_contact' placeholder="Next date of contact - DD/MM/YYYY"/>
              
            </div>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
   )
}

export default AddContacts;