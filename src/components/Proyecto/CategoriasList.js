import React from "react";
import Cards from "./Cards";

const CategoriasList = ({ categoria }) => {
    return (
        <div>
            <h1>Categoria List</h1>
            {
                categoria.map((cate, index) => (
                    <Cards nombre={cate} key={index} />
                ))
            }
        </div>
    );
};

export default CategoriasList;
