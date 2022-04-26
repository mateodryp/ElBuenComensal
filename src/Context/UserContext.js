import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {


    const [data, setData] = useState({
        address: "",
        description: "",
        email: "",
        id_restaurant: "",
        name_representative: "",
        last_name_representative: "",
        menu: "",
        name: "",
        neighborhood: "",
        phone_number: "",
        phone_number_representative: "",
        prices: "",
        token: ""
    })
    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
