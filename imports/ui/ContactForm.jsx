import React, {useState} from "react";
import { contactsCollections } from "../api/contactsCollections";

export const ContactForm = () =>{
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
   // const [email, setEmail] = useState(initialState, "");

    const saveContact = () => {
        console.info("Revisando Variables:", name, email, imageUrl);
        contactsCollections.insert({name, email, imageUrl});
        setImageUrl("");
        setName("");
        setEmail("");
    }
    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    value={name}
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    id="name" 
                />

            </div>
            <div>
                <label htmlFor="email">Correo Electronico</label>
                <input 
                    value={email}
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    id="email" 
                />
            </div>
            <div>
                <label htmlFor="imageUrl">Imagen Url</label> 
                <input 
                    value={imageUrl}
                    type="text" 
                    onChange={(e) => setImageUrl(e.target.value)}
                    id="imageUrl"
                />
            </div>
            <div>
            <button type="button" onClick={saveContact}>Graba Contacto</button>
            </div>
        </form>
    )
}



