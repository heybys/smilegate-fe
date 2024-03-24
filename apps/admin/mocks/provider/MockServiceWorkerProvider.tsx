'use client';

import { useState, useEffect, PropsWithChildren } from 'react';

const enable = process.env.NEXT_PUBLIC_ENV === 'local';

export default function MockServiceWorkerProvider({
  children,
}: PropsWithChildren) {
  const [ready, setReady] = useState(() => !enable);

  const initialize = async () => {
    if (enable) {
      const { initializeMockServiceWorker } = await import('@mocks/index');
      await initializeMockServiceWorker();
      setReady(true);
    }
  };

  useEffect(() => {
    if (ready) return;
    initialize().then(() => {
      console.log('MockServiceWorker initialized.');
    });
  }, [ready]);

  if (!ready) return null;

  return <>{children}</>;
}
