import React from "react";
import chiken from "../Statics/img/Chiken.png";
import arrow from '../Statics/img/arrow.png'
import ModalInfo from "./ModalInfo";
import { useState } from "react";

const RegisterPartTwo = ({ fatherState, partFuntion, handleChange, form }) => {

  const handleClose = (e) => {
    const modal = document.getElementById("modalInfo")
    if (modal !== null) {
      modal.style.display = "none"
    }

  }
  const [titleModal, settitleModal] = useState("")
  const [messageModal, setmessageModal] = useState("")

  const validateData = (e) => {
    e.preventDefault();
    let refNombreRestaurante = document.getElementById("nombreRestaurante")
    let refBarrio = document.getElementById("barrio")
    let refDireccion = document.getElementById("direccion")
    let refTelefonoRestaurante = document.getElementById("telefonoRestaurante")
    let refInformacionUbicacion = document.getElementById("informacionUbicacion")
    let modal = document.getElementById("modalInfo")



    if (refNombreRestaurante.value !== "" && refBarrio.value !== "" && refDireccion.value !== "" && refTelefonoRestaurante.value !== "" && refInformacionUbicacion.value !== "") {
      partFuntion(3)
    } else {
      settitleModal("¡Llene todos los campos!")
      setmessageModal("Hay campos vacios en el formulario")
      modal.style.display = "flex"
    }
  };

    return (
      <>
        <div class="modalInfo" id="modalInfo">
          <div class="modalInfo_content">
            <div class="modalInfo__text">
              <h2>{titleModal}</h2>
              <h3>{messageModal}</h3>
            </div>
            <div class="modalInfo__button">
              <button onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        </div>
        <div className="row_back" onClick={() => partFuntion(1)}>
          <img src={arrow} alt="" />
          <h2>Atras</h2>
        </div>
        <main className="main_register">
          <div className="main_register_elements">
            <div className="main_register_element_form">
              <div className="main_register_element_form_head">
                <div className="main_register_element_form_head_title">
                  <h1>Registro</h1>
                </div>
                <div className="main_register_element_form_head_Process">
                  <div className="main_register_element_form_head_Process_circle">
                    <div className="main_register_element_form_head_Process_circle_circle">
                      <h2>1</h2>
                    </div>
                    <div className="main_register_element_form_head_Process_circle_title">
                      <h2>Cuenta</h2>
                    </div>
                  </div>
                  <div className="main_register_element_form_head_Process_circle">
                    <div className="main_register_element_form_head_Process_circle_circle_active">
                      <h2>2</h2>
                    </div>
                    <div className="main_register_element_form_head_Process_circle_title_active">
                      <h2>Restaurante</h2>
                    </div>
                  </div>
                  <div className="main_register_element_form_head_Process_circle">
                    <div className="main_register_element_form_head_Process_circle_circle">
                      <h2>3</h2>
                    </div>
                    <div className="main_register_element_form_head_Process_circle_title">
                      <h2>Menú</h2>
                    </div>
                  </div>
                </div>
              </div>
              <form className="main_register_element_form_form" onSubmit={validateData}>
                <div className="main_register_element_form_form_row">
                  <div className="main_register_element_form_form_row_group">
                    <label htmlFor="">Nombre del restaurante</label>
                    <input type="text" name="NombreRestaurante" id="nombreRestaurante" onChange={handleChange} value={form["NombreRestaurante"] ? form["NombreRestaurante"] : ""} />
                  </div>
                  <div className="main_register_element_form_form_row_group">
                    <label htmlFor="">Barrio</label>
                    <input type="text" name="Barrio" id="barrio" onChange={handleChange} value={form["Barrio"] ? form["Barrio"] : ""} />
                  </div>
                </div>
                <div className="main_register_element_form_form_row">
                  <div className="main_register_element_form_form_row_group">
                    <label htmlFor="">Dirección</label>
                    <input type="text" name="Direccion" id="direccion" onChange={handleChange} value={form["Direccion"] ? form["Direccion"] : ""} />
                  </div>
                  <div className="main_register_element_form_form_row_group">
                    <label htmlFor="">Telefono del restaurante</label>
                    <input type="number" name="TelefonoRestaurante" id="telefonoRestaurante" onChange={handleChange} value={form["TelefonoRestaurante"] ? form["TelefonoRestaurante"] : ""} />
                  </div>
                </div>
                <div className="main_register_element_form_form_row">
                  <div className="main_register_element_form_form_row_group1">
                    <label htmlFor="">Información de ubicación adicional:</label>
                    <input type="text" name="InformacionUbicacion" id="informacionUbicacion" onChange={handleChange} value={form["InformacionUbicacion"] ? form["InformacionUbicacion"] : ""} />
                  </div>
                </div>
                <div className="main_register_element_form_form_row">
                  <button type="submit">Siguiente</button>
                </div>
              </form>
            </div>
            <div className="main_register_element_image">
              <img src={chiken} alt="" />
            </div>
          </div>
        </main>
      </>
    );
  };

export default RegisterPartTwo;
