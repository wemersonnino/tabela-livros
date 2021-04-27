import React from "react";

const TableHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de Livro</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Titulo
                <div className="container-setinhas">
                    <div onClick={() => props.ordenarCrescent()}>&#129093;</div>
                    <div onClick={() => props.ordernarDecrescent()}>&#129095;</div>
                </div>
            </th>
            <th>Autor</th>
            <th></th>
        </tr>
    </thead>
);

export default TableHead;