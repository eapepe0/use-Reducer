import React from 'react';
import { TodoItem } from './TodoItem';
export const TodoList = ({ list, onBorrarItem }) => {
  console.log(list);
  return (
    <>
      <ul className="list-group">
        {list.map((item) => (
          <TodoItem
            key={item.id}
            description={item.description}
            onFuncion={onBorrarItem}
            id={item.id}
          />
        ))}
      </ul>
      ;
    </>
  );
};
