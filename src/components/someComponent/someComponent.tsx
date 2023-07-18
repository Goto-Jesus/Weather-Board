/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { actions as someActions } from '../../store/reducers/someReducer';

export const SomeComponent: React.FC = () => {
  const dispatch = useDispatch();

  const someState = useAppSelector((state) => state.someState);

  const add = (value: number) => dispatch(someActions.add(value));
  const take = (value: number) => dispatch(someActions.take(value));
  const clear = () => dispatch(someActions.clear());

  return (
    <>
      <button type="button" onClick={() => take(1)}>
        minus
      </button>
      <button type="button" onClick={() => clear()}>
        {someState}
      </button>
      <button type="button" onClick={() => add(1)}>
        plus
      </button>
    </>
  );
};
