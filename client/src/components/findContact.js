import react, {useState, useEffect} from 'react';

import { getProfile } from "../services/profileService";

function FindContact() {

    const [contactID, setContactID] = useState("");

    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        DOB : "",
        Address: "",
        phone : "",
        emailAddress: "",
        siblings: 0,
        children : false,
        likes : "",
        dislikes: "",
        occupation: "",
        firstMet: "",
        lContacted: "",
        nextContact: "",
        photo: ""
    });
   

    const [hasId, setID] = useState(false);
    

    function handleChange(event){
        setContactID(event.target.value);
        console.log(event.target.value);
    }

    async function handleClick(event){
       //const id = event.target.value;
       console.log('This is lentgth', contactID.length)
       if(contactID.match(/^[0-9a-fA-F]{24}$/)){
           //the above 'if' statement requests that the id is a match if the id is from 0 to 9, a to f and A-F and has 24 characters
        try{
            const response = await getProfile(contactID);
            if(!response.length && contactID.length===24 && Object.keys(response).length !== 0){
                // console.log(response)
                console.log('children response',response.children)
                // console.log('children response',typeof(response))
                // console.log(Object.keys(response).length)
                setProfile({
                    first_name: response.first_name,
                    last_name: response.last_name,
                    DOB : response.DOB,
                    address: response.address,
                    tel_No : response.tel_No,
                    email_address: response.email_address,
                    siblings: response.siblings,
                    children : response.children,
                    likes : response.likes,
                    dislikes: response.dislikes,
                    occupation: response.occupation,
                    firstMet: response.first_met,
                    lContacted: response.Last_contacted,
                    estimated_date_for_next_contact: response.estimated_date_for_next_contact
                });
                setID(true)
            } else {
                alert('This ID was not found, please try again');
                setContactID("");
            }
        } catch(e){
            alert(e)// send back an error
        }

       } else {
           alert('The ID is not 24 characters long. Please try again')
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

  return (
    <div>  
        <div>
            <input type="text" placeholder="Please enter contact id" onChange={handleChange}/> 
            <button className="btn btn-sm btn-success mx-2" value={contactID} onClick={handleClick}>Find Contact address</button>
        </div>

         {hasId ? renderProfile(profile) : (<p>Please enter a contact.</p>)}
     </div>
  );
}


export default FindContact