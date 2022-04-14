import React from "react";
import meat from "../Statics/img/Meat.png";
import pdfImage from "../Statics/img/pdf.png";
import arrow from '../Statics/img/arrow.png'
import { useState } from "react";

const RegisterPartThree = ({ fatherState, partFuntion, handleChange, form }) => {

  const handleClose = (e) => {
    const modal = document.getElementById("modalInfo")
    if (modal !== null) {
      modal.style.display = "none"
    }

  }


  const sendDataRegister = async () =>{
    console.log(fatherState)

    const formData = new FormData();
    formData.append("name_representative",form.Nombres)
    formData.append("last_name_representative",form.Apellidos)
    formData.append("email",form.Email)
    formData.append("phone_number_representative",form.Telefono)
    formData.append("password",form.Contraseña)
    formData.append("name",form.NombreRestaurante)
    formData.append("neighborhood",form.Barrio)
    formData.append("address",form.Direccion)
    formData.append("phone_number",form.TelefonoRestaurante)
    formData.append("prices",form.PrecioPromedio)
    formData.append("menu",archivo.archivo)
    formData.append("description",form.DescripcionRestaurante)
    
    try{
    const resPost = await fetch("http://144.22.197.146:8000/restaurants/restaurant/",{
    method: 'POST',
    body: formData,
    })
    console.log(resPost)
    const post = await resPost.json()
    console.log(post)
  }catch(e){
    console.log(e)
  };
  
  }
  
  const handleFileSelect = (e) => {
    setArchivo({
      archivo: e.target.files[0],
      archivoNombre: e.target.files[0].name
    })

  }
  const [titleModal, settitleModal] = useState("")
  const [messageModal, setmessageModal] = useState("")
  const [archivo, setArchivo] = useState("")

  const validateData = (e) => {
    e.preventDefault();
    let refPrecioPromedio = document.getElementById("precioPromedio")
    let refDescripcionRestaurante = document.getElementById("descripcionRestaurante")
    let modal = document.getElementById("modalInfo")
    if (refPrecioPromedio.value !== "" && refDescripcionRestaurante.value !== "") {
      if (archivo.archivo) {
        sendDataRegister()
      } else {
        settitleModal("¡Seleccione un archivo!")
        setmessageModal("No ha seleccionado ningun archivo PDF")
        modal.style.display = "flex"
      }
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
      <div className="row_back" onClick={() => partFuntion(2)}>
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
                  <div className="main_register_element_form_head_Process_circle_circle">
                    <h2>2</h2>
                  </div>
                  <div className="main_register_element_form_head_Process_circle_title">
                    <h2>Restaurante</h2>
                  </div>
                </div>
                <div className="main_register_element_form_head_Process_circle">
                  <div className="main_register_element_form_head_Process_circle_circle_active">
                    <h2>3</h2>
                  </div>
                  <div className="main_register_element_form_head_Process_circle_title_active">
                    <h2>Menú</h2>
                  </div>
                </div>
              </div>
            </div>
            <form className="form_register_separate" onSubmit={validateData}>
              <div className="main_register_element_form_form2">
                <div className="main_register_element_form_form_column">
                  <div className="main_register_element_form_form_column_group">
                    <label htmlFor="">Precio Promedio del plato</label>
                    <input type="number" name="PrecioPromedio" id="precioPromedio" onChange={handleChange} value={form["PrecioPromedio"] ? form["PrecioPromedio"] : ""} />
                  </div>
                  <div className="main_register_element_form_form_column_group">
                    <div className="main_register_element_form_form_column_group_pdf">
                      <h2>Subir menú en pdf (Maximo 2MB)</h2>
                      <input type="file" name="File" id="file" onChange={handleFileSelect} accept=".pdf" />
                      <label htmlFor="file" ><img src={pdfImage} alt="" /></label>
                      <h2>{archivo.archivo ? archivo.archivoNombre : "No ha seleccionado ningun archivo"}</h2>
                    </div>
                  </div>
                </div>
                <div className="main_register_element_form_form_column">
                  <div className="main_register_element_form_form_column_group_op">
                    <label htmlFor="">Descripción del restaurante</label>
                    <textarea name="DescripcionRestaurante" id="descripcionRestaurante" cols="30" rows="10" onChange={handleChange} value={form["DescripcionRestaurante"] ? form["DescripcionRestaurante"] : ""}></textarea>
                  </div>
                </div>
              </div>
              <div className="main_register_element_form_form2_button">
                <button type="submit">Siguiente</button>
              </div>
            </form>
          </div>
          <div className="main_register_element_image">
            <img src={meat} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPartThree;
