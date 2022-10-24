import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/hamburguermenu";
import Navbar from "../../Components/navbar";
import "./style.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Formulario({ tipo }) {
  return tipo === "juridica" ? (
    <>
      <header>
        <div class="container">
          <div class="box1">
            <div class="juridica" id="juridica">
              <h3 class="subTitle">Dados empresariais</h3>
              <p>
                <label for="">Razão Social</label>
              </p>
              <input type="text" id="razaoSocial" />
              <p>
                <label for="">Nome Fantasia</label>
              </p>
              <input type="text" id="nomeFantasia" />
              <p>
                <label for=""> CNPJ </label>
              </p>
              <input type="text" id="cnpj" placeholder="apenas os números" />
              <p>
                <label for=""> I.E. </label>
              </p>
              <input type="text" id="cnpj" placeholder="apenas os números" />
              <p>
                <label for=""> I.M. </label>
              </p>
              <input type="text" id="cnpj" placeholder="apenas os números" />
              <p>
                <label for=""> Telefone Fixo </label>
              </p>
              <input
                type="text"
                id="phone1"
                maxlength="11"
                placeholder="DDD + telefone"
              />
              <p>
                <label for=""> Celular </label>
              </p>
              <input
                type="text"
                id="phone2"
                maxlength="11"
                placeholder="DDD + telefone"
              />
              <p>
                <label for="">Email</label>
              </p>
              <input type="text" id="email" />
            </div>
            <div class="endereco" id="endereco">
              <h3 class="subTitle">Endereço</h3>
              <p>
                <label for=""> CEP</label>
              </p>
              <input
                type="text"
                id="cep"
                maxlength="8"
                placeholder="apenas os números"
              />
              <p>
                <label for="">Endereço</label>
              </p>
              <input type="text" id="endereco" />
              <p>
                <label for="">Numero</label>
              </p>
              <input type="text" id="numero" placeholder="número ou s/n" />
              <p>
                <label for="">Complemento</label>
              </p>
              <input
                type="text"
                id="complemento"
                placeholder="Apartamento,sala,conjunto,etc."
              />
              <p>
                <label for="">Ponto de referência</label>
              </p>
              <input type="text" id="referencia" />
              <p>
                <label for="">Bairro</label>
              </p>
              <input type="text" id="bairro" />
              <p>
                <label for="">Cidade</label>
              </p>
              <input type="text" id="cidade" />
              <p>
                <label for="">Estado</label>
              </p>
              <input type="text" id="estado" />
            </div>
          </div>
          <div>
            <input class="bt" type="button" value="Cadastrar" />
          </div>
        </div>
      </header>
    </>
  ) : (
    <>
      <header>
        <div class="container">
          <div class="box1">
            <div class="fisica" id="fisica">
              <h3 class="subTitle">Dados pessoais</h3>
              <p>
                <label for="">Nome Completo</label>
              </p>
              <input type="text" id="nome" />
              <p>
                <label for="">CPF</label>
              </p>
              <input
                type="text"
                id="cpf"
                maxlength="14"
                placeholder="apenas os números"
              />
              <p>
                <label for="">Celular</label>
              </p>
              <input
                type="text"
                id="phone1"
                maxlength="11"
                placeholder="DDD + telefone"
              />
              <p>
                <label for="">Telefone Fixo</label>
              </p>
              <input
                type="text"
                id="phone2"
                maxlength="11"
                placeholder="DDD + telefone"
              />
              <p>
                <label for="">Email</label>
              </p>
              <input type="text" id="email" />
            </div>
            <div class="endereco" id="endereco">
              <h3 class="subTitle">Endereço</h3>
              <p>
                <label for=""> CEP</label>
              </p>
              <input
                type="text"
                id="cep"
                maxlength="8"
                placeholder="apenas os números"
              />
              <p>
                <label for="">Endereço</label>
              </p>
              <input type="text" id="endereco" />
              <p>
                <label for="">Numero</label>
              </p>
              <input type="text" id="numero" placeholder="número ou s/n" />
              <p>
                <label for="">Complemento</label>
              </p>
              <input
                type="text"
                id="complemento"
                placeholder="Apartamento,sala,conjunto,etc."
              />
              <p>
                <label for="">Ponto de referência</label>
              </p>
              <input type="text" id="referencia" />
              <p>
                <label for="">Bairro</label>
              </p>
              <input type="text" id="bairro" />
              <p>
                <label for="">Cidade</label>
              </p>
              <input type="text" id="cidade" />
              <p>
                <label for="">Estado</label>
              </p>
              <input type="text" id="estado" />
            </div>
          </div>
          <div>
            <Link to='/'><input class="bt" type="button" value="Cadastrar" /></Link>
          </div>
        </div>
      </header>
    </>
  );
}

function Cadastro() {
  const [tipo, setTipo] = useState("fisica");

  return (
    <>
      <header>
        <div class="box0">
          <h3>Tipo de cadastro</h3>
          <div class="inputRadio">
            <input
              type="radio"
              name="optradio"
              value="fisica"
              onClick={(e) => setTipo(e.target.value)}
            />
            Pessoa Fisica
            <input
              type="radio"
              name="optradio"
              value="juridica"
              onClick={(e) => setTipo(e.target.value)}
            />
            Pessoa Juridica
          </div>
          <div>{Formulario({ tipo })}</div>
        </div>
      </header>
    </>
  );
}
export default Cadastro;
