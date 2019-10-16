import React, { Component } from 'react';
import './Fornecedor.css';
import Novo from './Novo.js'
import Consulta from './Consulta.js'

const novo='novo'
const consulta='consulta'

class Fornecedor extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            btn: ''
        }
    }

    handleClick(value){
        switch (value) {
            case novo:
                return(
                    this.setState({btn: novo})
                )
            case consulta:
                return(
                    this.setState({btn: consulta})
                )
            default:
                break;
        }
    }

    render() {
        return(
            
            <div className="pagina">
                
                <div className="titulo">
                    <h2 id="h2-titulo" className="mbr-bold display-5">FORNECEDOR</h2>    
                </div>

                <div className="container">
                    <div className="row mbr-justify-content-center">
                        <div onClick={()=>{this.handleClick(novo)}} className="wrap">
                            <div className="text-wrap vcenter">
                                <h2 id="h2-texto1" className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                                    <span id="texto">Novo</span>
                                </h2>

                            </div>
                        </div>

                        <div onClick={()=>{this.handleClick(consulta)}} className="wrap" >
                            <div className="text-wrap vcenter">
                                <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                                    <p id="texto2">Consultar</p>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container2">
                    {this.state.btn == novo ?
                        <Novo/>
                    : (this.state.btn == consulta ?
                        <Consulta/>:
                        null
                      )
                    }
                </div>

                
            </div>
        )
    }
}

export default Fornecedor;