'use client';

import styled from 'styled-components';
import { useState } from 'react';

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export function Counter({ initCount }: { initCount: number }) {
  const [count, setCount] = useState<number>(initCount);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <PrimaryButton onClick={increase}> + 버튼</PrimaryButton>
      &nbsp;{count}&nbsp;
      <SecondaryButton onClick={decrease}> - 버튼</SecondaryButton>
    </div>
  );
}
