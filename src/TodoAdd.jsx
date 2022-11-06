import React, { useState } from 'react';

export const TodoAdd = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const onCambiaTexto = () => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const onFormSubmit = () => {
    event.preventDefault();

    const objetoAgregado = {
      description: text,
      id: new Date().getTime() * 3,
      done: false,
    };
    onAddTask(objetoAgregado);
    setText('');
  };

  return (
    <div>
      <form action="" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Que tarea haremos hoy..."
          value={text}
          onChange={onCambiaTexto}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </div>
  );
};
