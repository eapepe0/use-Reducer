import React from 'react';

export const TodoItem = ({ description, onFuncion, id }) => {
  const onBorrarItem = () => {
    console.log('onBorrar');
    onFuncion(id);
    console.log(id);
  };
  return (
    <div>
      <li className="list-group-item  d-flex justify-content-between">
        <span className="align-self-center">{description}</span>
        <button className="btn btn-danger" onClick={onBorrarItem}>
          Borrar
        </button>
      </li>
    </div>
  );
};
