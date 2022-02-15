import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
//Pour crrer le component
export const ContactForm  = () =>{

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [imageUrl, setImageUrl] = useState("");



      //On va definir une methode pour enrgistrer le formulaire 
      const SaveContact = () =>{
         
          //pour sauvegarder les donnees entré ds mongodb du contact
          ContactsCollection.insert({name,email,imageUrl});

          setName("");
          setEmail("");
          setImageUrl("");
      }
return(
    

    <form>
    <div>
    <label htmlFor="name">
     Name 
     </label>
     <input type="text" htmlFor="name" value={name} onChange={(e)=> setName(e.target.value)} />
    </div>
    <div>
      <label htmlFor="email" >email</label>
      <input value={email}  onChange={(e)=> setEmail(e.target.value)} type="email" id="email"/>
    </div>
    <div>
      <label htmlFor="imageUrl"  >imageUrl</label>
      <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} type="text" id="imageUrl"/>
    </div>
    <div>
    <button type="button" class="btn btn-warning" onClick={SaveContact}>Save</button>
    </div>
    </form>
)

};




