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
                    <table>
                        <tr className="novoDivNome">
                            <td id="tdEsq"><label className="novoLblNome">Nome: </label></td>
                            <td id="tdDir"><input type="textField" className="novoTxtNome" placeholder="Nome"/></td>
                        </tr>
                        <tr className="novoDivEmail">
                            <td id="tdEsq"><label className="novoLblEmail">Email: </label></td>
                            <td id="tdDir"><input type="textField" className="novoTxtEmail" placeholder="exemplo@email.com"/></td>
                        </tr>
                        <tr className="novoDivEndereco">
                            {/* <tr className="novoDivCidade"> */}
                                <td className="novoTdLblCidade"><label className="novoLblCidade">Cidade: </label></td>
                                <td className="novoTdTxtCidade"><input type="textField" className="novoTxtCidade" placeholder="cidade"/></td>
                            {/* </tr> */}
                            {/* <tr className="novoDivUf"> */}
                            <td className="novoTdLblUf"><label className="novoLblUf">UF: </label></td>
                            <td className="novoTdSelUf"><select className="novoSelUf" required>
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
                            </select></td>
                            {/* </tr> */}
                        </tr>
                        <tr className="novoDivTelefone">
                            <td id="tdEsq"><label className="novoLblTelefone">Telefone: </label></td>
                            <td id="tdDir">
                                <input type="textField" className="novoTxtTelefone" placeholder="Ex: (14)998121879"/>
                                <div className="novoDivBtnCad wrap">
                                    <label>Cadastrar</label>
                                </div>
                            </td>
                        </tr>
                    </table>
                    
                </form>
            </div>
        )
    }

}

export default Novo;