import React from 'react'
import cookie from 'react-cookies'
import PropTypes from 'prop-types'
const LoadUserProfile = (props) => (
   <div div className="border border-info formDiv">
      <p><b>UserName: </b>  {props.userSession.name}</p>
      <p><b>Email: </b>  {props.userSession.email}</p>
      <p><b>Address: </b>  {props.userSession.address}</p>
      <p><b>Phone: </b>  {props.userSession.phone}</p>
      <p><b>Register date: </b>  {props.userSession.registerDate}</p>
   </div>
)
export const UserProfile = () =>  {
        var content = '';
        if(cookie.load('userCookie')){
           var userData = cookie.load('userCookie');
           console.log(userData);
             content = (
                <div>
                <h6>Profile</h6>
               <LoadUserProfile userSession = {userData[0]}/>
               </div>
             )
        }
        else{
           content = (
              <h1>
                 You are not currently logged in.
              </h1>
           )
        }
       
        return(
         <div className="row justify-content-md-center "  >
           {content}
         </div>
        );
     }

     LoadUserProfile.propTypes = {
      userSession: PropTypes.array
  }

