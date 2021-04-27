import React, {Component} from "react";
import './index.css';
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";

class App extends Component{
    state = {
        livros: []
    };
    componentDidMount() {
        fetch("/api/livros.json")
            .then(response => response.json())
            .then(livros => this.setState({livros}))
            .catch(function (error){
                alert("Erro na requisição");
                console.log("Erro na requisição")
            })
            .finally(function () {//usar se achar necessario.
                console.log("sempre retorna")
            });
    };
    handleRemoverLinha = () => console.log("Botão clicado");

    render() {
        return(
            <table className="tabela">
                <TableHead/>
                <TableBody
                    livros={this.state.livros}
                    removerLinha = {this.handleRemoverLinha}
                />
                <TableFoot qdeLivros = {this.state.livros.length}/>
            </table>
        );
    }
}

export default App;
