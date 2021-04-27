import React from "react";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";

function App() {
  return (
      <table className="tabela">
          <TableHead/>
          <TableBody/>
          <TableFoot/>
      </table>
  );
}

export default App;
