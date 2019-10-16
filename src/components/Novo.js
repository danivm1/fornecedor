import React, { Component } from 'react';
import './Novo.css';



class Novo extends Component {
    render(){
        return(
            <div className="containerNovo">
                <form>
                    <div className="novoTitulo">
                        <label align="center">Novo cadastro</label>
                    </div>
                    <div className="novoDivNome">
                        <label className="novoLblNome">Nome: </label>
                        <input type="textField" className="novoTxtNome" placeholder="Nome"/>
                    </div>
                    <div className="novoDivEmail">
                        <label className="novoLblEmail">Email: </label>
                        <input type="textField" className="novoTxtEmail" placeholder="exemplo@email.com"/>
                    </div>
                    <div className="novoDivEndereco">
                        <label className="novoLblCidade">Cidade: </label>
                        <input type="textField" className="novoTxtCidade" placeholder="cidade"/>
                        <label className="novoLblUf">UF: </label>
                        <select className="novoSelUf" required>
                            <option></option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AM</option>
                            <option>AP</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MG</option>
                            <option>MS</option>
                            <option>MT</option>
                            <option>PA</option>
                            <option>PE</option>
                            <option>PR</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>RS</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>PA</option>
                            <option>PE</option>
                            <option>TO</option>
                        </select>
                        <div className="novoDivTelefone">
                            <label className="novoLblTelefone">Telefone: </label>
                            <input type="textField" className="novoTxtTelefone" placeholder="Ex: (14)998121879"/>
                        </div>
                        <div className="novoDivBtnCad">
                            <label>asdgh</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default Novo;