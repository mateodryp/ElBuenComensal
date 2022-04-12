import React from 'react'

const ModalInfo = ({title, message}) => {

    const handleClose = (e)=>{
        const modal = document.getElementById("modalInfo")
    }
  return (
    <div class="modalInfo" id="modalInfo">
        <div class="modalInfo_content">
            <div class="modalInfo__text">
                <h2>{title}</h2>
                <h3>{message}</h3>
            </div>
            <div class="modalInfo__button">
                <button onClick={handleClose()}>Cerrar</button>
            </div>
        </div>
    </div>
  )
}

export default ModalInfo