import { Link, useNavigate } from "react-router-dom";
import pizza from "../Statics/img/Pizza.png";
import arrow from "../Statics/img/arrow.png";
import ModalInfo from "./ModalInfo";
import { useState } from "react";
const RegisterPartOne = ({ fatherState, partFuntion, handleChange }) => {
  const navigate = useNavigate("");
  const [titleModal, settitleModal] = useState("")
  const [messageModal, setmessageModal] = useState("")

  const handleClose = (e) => {
    const modal = document.getElementById("modalInfo")
    if (modal !== null) {
      modal.style.display = "none"
    }

  }

  const validateData = (e) => {
    e.preventDefault();
    let refNombre = document.getElementById("nombres")
    let refApellido = document.getElementById("apellidos")
    let refEmail = document.getElementById("email")
    let refTelefono = document.getElementById("telefono")
    let refContraseña = document.getElementById("contraseña")
    let refConContraseña = document.getElementById("confirmarContraseña")
    let modal = document.getElementById("modalInfo")



    if (refNombre.value !== "" && refApellido.value !== "" && refEmail.value !== "" && refTelefono.value !== "" && refContraseña.value !== "" && refConContraseña.value !== "") {
      if (refContraseña.value.length >= 8 && refConContraseña.value.length >= 8) {
        console.log("Longitud correcta")
        if (refContraseña.value === refConContraseña.value) {
          console.log("Contraseña coinciden")
        }
        else {
          settitleModal("¡Las contraseñas no coinciden!")
          setmessageModal("Por favor revise las contraseñas")
          modal.style.display = "flex"
        }
      }
      else {
        settitleModal("¡Contraseña demasiado corta!")
        setmessageModal("La contraseña debe tener minimo 8 caracteres")
        modal.style.display = "flex"
      }
    } else {
      settitleModal("¡Llene todos los campos!")
      setmessageModal("Hay campos vacios en el formulario")
      modal.style.display = "flex"
    }
  }

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
      <div className="row_back" onClick={() => { navigate("/"); }}>
        <img src={arrow} alt="" />
        <h2>Atras</h2>
      </div>
      <main className="main_register" id="modal_register1">
        <div className="main_register_elements">
          <div className="main_register_element_form">
            <div className="main_register_element_form_head">
              <div className="main_register_element_form_head_title">
                <h1>Registro</h1>
              </div>
              <div className="main_register_element_form_head_Process">
                <div className="main_register_element_form_head_Process_circle">
                  <div className="main_register_element_form_head_Process_circle_circle_active">
                    <h2>1</h2>
                  </div>
                  <div className="main_register_element_form_head_Process_circle_title_active">
                    <h2>Cuenta</h2>
                  </div>
                </div>
                <div className="main_register_element_form_head_Process_circle">
                  <div className="main_register_element_form_head_Process_circle_circle">
                    <h2>2</h2>
                  </div>
                  <div className="main_register_element_form_head_Process_circle_title">
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
                  <label htmlFor="nombres">Nombres</label>
                  <input type="text" name="Nombres" id="nombres" onChange={handleChange} />
                </div>
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input type="text" name="Apellidos" id="apellidos" onChange={handleChange} />
                </div>
              </div>
              <div className="main_register_element_form_form_row">
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="Email" id="email" onChange={handleChange} />
                </div>
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="telefono">Telefono</label>
                  <input type="tel" name="Telefono" id="telefono" onChange={handleChange} />
                </div>
              </div>
              <div className="main_register_element_form_form_row">
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="contraseña">Contraseña</label>
                  <input type="password" name="Contraseña" id="contraseña" onChange={handleChange} />
                </div>
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
                  <input type="password" name="ConfirmarContraseña" id="confirmarContraseña" />
                </div>
              </div>
              <div className="main_register_element_form_form_row">
                <button type="submit">Siguiente</button>
              </div>
            </form>
          </div>
          <div className="main_register_element_image">
            <img src={pizza} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPartOne;
