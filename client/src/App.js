import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import UpdateContact from "./components/updateContact";
import DeleteContact from "./components/deleteContact";
import AddContact from "./components/addContact";
import Contacts from "./components/contacts";
import findAddress from "./components/findContact";
import "./App.css";
import "./index.css";
import "./form.css";


function App() {
 

return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/search" component={findAddress} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/edit/:id" component={UpdateContact} />
          <Route path="/add" component={AddContact} />
          <Route path="/delete" component={DeleteContact} />
        </div>
    </Router>
 );
}

export default App;


