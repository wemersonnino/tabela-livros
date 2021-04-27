import React from "react";

const TableFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Qunatidade de livros na tabela: {props.qdeLivros}</td>
        </tr>
    </tfoot>
);

export default TableFoot;