import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllProfiles, deleteProfile } from "../services/profileService";
import { Link } from 'react-router-dom';


//the function not only deletes a profile/id but also keeps the remainder that don't need to be deleted.
function Contacts() {

    function handleDelete(event){
        const id = event.target.value
        console.log(id)
        try {
            const response = deleteProfile(id)
            console.log(response)
            setProfiles(prevProfiles => {
                return prevProfiles.filter(el => el._id !== id)// filters through the profiles and keeps the ones that are not equivalent to the id that has been deleted.
            });
        } catch (event) {
            alert(event)
        }
    }


    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
    //here need to implement requests to get the addresses. Get profiles is just an example
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

        getProfiles();
    }, [profiles]);


    const renderProfile = (user) => {
        return(
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-md-4 custom text-center">
                                        <img src={user.photo} 
                                        onError={event => {
                                        event.target.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                        event.onerror = null
                                        }}
                                        alt="profile" 
                                        className="img-fluid my-3" 
                                        key={user._id}
                                        style={{width: 190}} />
                                        <h5>{`${user.first_name}
                                        ${user.last_name}`}</h5>
                                        <p>{user.occupation}</p>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                        <h3>Information</h3>
                                        <hr />
                                        <div className="row pt-1">
                                            <div className="col-4 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-secondary">{user.email_address}</p>
                                            </div>
                                            <div className="col-4 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-secondary">{user.tel_No}</p>
                                            </div>
                                            <div className="col-4 mb-3">
                                                <h6>Date of Birth</h6>
                                                <p className="text-secondary">{user.DOB}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <br />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Address</h6>
                                                <p className="text-secondary">{user.address}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Next Meet Up</h6>
                                                <p className="text-secondary">{user.estimated_date_for_next_contact}</p>
                                            </div>
                                            </div>
                                            <div className="card-body text-center">
                                                {/* <button href="#" className="btn btn-sm btn-success  mx-2">Open</button> */}
                                                <Link to={"/edit/"+user._id} className="btn btn-sm btn-info mx-2">Update</Link>
                                                <button href="#" onClick={handleDelete} key={user._id} value={user._id} className="btn btn-sm btn-danger mx-2">Delete</button>
                                                {/* <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a> */}
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
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>There are no profiles</p>
        )}
    </div>
  );
}


export default Contacts;