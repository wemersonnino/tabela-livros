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
    handleRemoverLinha = (id) => {
        const livros = this.state.livros.filter(l => l.id !== id);
        this.setState({livros});
    };
    handleOrdenarCrescente = (titulo) =>{
        const livros = this.state.livros.sort((a,b) =>
            a.titulo < b.titulo ? -1 : 0
        );
        this.setState({livros});
    };
    handleOrdenaDecrescente = titulo => {
        const livros = this.state.livros.sort((a,b) =>
            a.titulo < b.titulo ? -1 : 0
        );
        livros.reverse();
        this.setState({livros});
    }

    render() {
        return(
            <table className="tabela">
                <TableHead
                    ordenarCrescent = {this.handleOrdenarCrescente}
                    ordernarDecrescent ={this.handleOrdenaDecrescente}
                />
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
