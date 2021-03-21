import { useCallback, useState } from 'react';

function useModalState(defaultValue = false) {
  const [state, setstate] = useState(defaultValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
}
