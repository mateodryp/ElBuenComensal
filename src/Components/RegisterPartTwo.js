import React from "react";
import chiken from "../Statics/img/Chiken.png";
import arrow from '../Statics/img/arrow.png'

const RegisterPartTwo = ({ fatherState, partFuntion }) => {
  return (
    <>
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
            <form className="main_register_element_form_form">
              <div className="main_register_element_form_form_row">
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="">Nombre</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="">Barrio</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="main_register_element_form_form_row">
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="">Dirección</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="main_register_element_form_form_row_group">
                  <label htmlFor="">Telefono</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="main_register_element_form_form_row">
                <div className="main_register_element_form_form_row_group1">
                  <label htmlFor="">Información de ubicación adicional:</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="main_register_element_form_form_row">
                <button onClick={() => partFuntion(3)}>Siguiente</button>
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
