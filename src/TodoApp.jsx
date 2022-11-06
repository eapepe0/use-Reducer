import React, { useReducer } from 'react';
import TodoReducer, { todoReducer } from './TodoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la pieda del Alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la pieda del Tiempo',
    done: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1 className="text-center mt-3">
        TodoApp (10) ,<small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item  d-flex justify-content-between">
              <span className="align-self-center">item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
            <li className="list-group-item  d-flex justify-content-between">
              <span className="align-self-center">item 2</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
            <li className="list-group-item  d-flex justify-content-between">
              <span className="align-self-center">item 3</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form action="">
            <input type="text" className="form-control mb-2" />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
