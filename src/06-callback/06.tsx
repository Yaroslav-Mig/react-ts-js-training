import React, { ChangeEvent, MouseEvent } from 'react';

const callback = (): void => {
  alert('hey');
};
// window.setTimeout(callback, 1000);

export const User = () => {
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    debugger;
    alert(event.currentTarget.name);
  };
  const saveUser = () => {
    alert('User saved');
  };
  const onNameChanged = () => {
    console.log('name changed');
  };
  const onFocus = () => {
    console.log('focus lost');
  };
  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`${event.currentTarget.value} - age changed `);
  };

  return (
    <div>
      <textarea onChange={onNameChanged} tabIndex={2}>
        Yaroslav
      </textarea>
      <input tabIndex={1} type={'number'} onBlur={onFocus} onChange={onAgeChanged} />
      <button name='delete' onClick={deleteUser}>
        delete
      </button>
      <button name='save' onClick={deleteUser}>
        save
      </button>
    </div>
  );
};
