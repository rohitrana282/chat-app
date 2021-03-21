import { useCallback, useState } from 'react';

function useModalState(defaultValue = false) {
  const [state, setstate] = useState(defaultValue);

  const open = useCallback(() => setstate(true), []);
  const open = useCallback(() => setstate(true), []);
}
