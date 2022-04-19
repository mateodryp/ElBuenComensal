import React, { useState } from 'react'
import ComoFuncionaComensal from '../Components/ComoFuncionaComensal'
import ComoFuncionaRestaurante from '../Components/ComoFuncionaRestaurante'
import FooterPublic from '../Components/FooterPublic'
import HeaderPublic from '../Components/HeaderPublic'

const ComoFunciona = () => {
    const [user, setUser] = useState(1)

    if (user === 1) {
        return (
            <>
                <HeaderPublic />
                <ComoFuncionaRestaurante userFunction={setUser}/>
                <FooterPublic />

            </>
        )

    } else {
        return (
            <>
                <HeaderPublic />
                <ComoFuncionaComensal userFunction={setUser} />
                <FooterPublic />

            </>
        )

    }


}


export default ComoFunciona