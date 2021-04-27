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
                console.log("Erro na requisição")
            })
            .finally(function () {
                console.log("sempre retorna")
            });
    }

    render() {
        return(
            <table className="tabela">
                <TableHead/>
                <TableBody livros={this.state.livros}/>
                <TableFoot qdeLivros = {this.state.livros.length}/>
            </table>
        );
    }
}

export default App;
