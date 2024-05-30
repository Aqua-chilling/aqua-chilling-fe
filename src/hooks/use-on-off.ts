import { useCallback, useEffect, useRef, useState } from 'react';

export const useOnOff = (defaultOn?: boolean) => {
  const [isOn, setIsOn] = useState(defaultOn || false);
  const turnOff = useCallback(() => {
    setIsOn(false);
  }, []);

  const turnOn = useCallback(() => {
    setIsOn(true);
  }, []);

  return {
    isOn,
    turnOn,
    turnOff
  };
};

export function useStateCallback<T>(initialState: T): [T, (state: T, cb?: (state: T) => void) => void] {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<((state: T) => void) | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: T, cb?: (state: T) => void) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
