import React, { useReducer, useState } from 'react';
import TodoReducer, { todoReducer } from './TodoReducer';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
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
  //const [state, dispatch] = useReducer(todoReducer, initialState);
  const [state, setState] = useState(initialState);
  const onAddHandler = (objeto) => {
    setState([objeto, ...state]);
  };
  const onBorrarHandler = (id) => {
    console.log('Esta corriendo esto');
    setState((prevState) => {
      const updatedState = prevState.filter((item) => item.id !== id);
      return updatedState;
    });
  };

  return (
    <>
      <h1 className="text-center mt-3">
        TodoApp (10) ,<small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList list={state} onBorrarItem={onBorrarHandler} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onAddTask={onAddHandler} />
        </div>
      </div>
    </>
  );
};
