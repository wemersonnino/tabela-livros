import React, {Component} from "react";
import './index.css';
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";

class App extends Component{
    state = {
        livros: [
            {
                id:"978-85-7522-632-2",
                titulo: "CSS Grid Layout",
                autor: "Mauricio Samy Silva"
            },
            {
                id:"978-85-7522-677-3",
                titulo: "Node Essencial",
                autor: "Ricardo R. Lacheta"
            },
            {
                id:"978-85-7522-512-7",
                titulo: "Aprendendo Material Design",
                autor: "Kyle Mew"
            }
        ]
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
