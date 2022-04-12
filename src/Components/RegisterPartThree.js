import React from "react";
import meat from "../Statics/img/Meat.png";
import pdfImage from "../Statics/img/pdf.png";
import arrow from '../Statics/img/arrow.png'

const RegisterPartThree = ({ fatherState, partFuntion }) => {
  return (
    <>
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
            <form className="form_register_separate">
              <div className="main_register_element_form_form2">
                <div className="main_register_element_form_form_column">
                  <div className="main_register_element_form_form_column_group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="" id="" />
                  </div>
                  <div className="main_register_element_form_form_column_group">
                    <div className="main_register_element_form_form_column_group_pdf">
                      <h2>Subir menú en pdf (Maximo 2MB)</h2>
                      <img src={pdfImage} alt="" />
                      <h2>menu.pdf</h2>
                    </div>
                  </div>
                </div>
                <div className="main_register_element_form_form_column">
                  <div className="main_register_element_form_form_column_group_op">
                    <label htmlFor="">Descripción del restaurante</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
              </div>
              <div className="main_register_element_form_form2_button">
                <a href="registro3.html">Finalizar</a>
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
