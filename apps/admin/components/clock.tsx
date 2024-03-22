'use client';

import React from 'react';
import useCurrentTime from '@hooks/useCurrentTime'; // useCurrentTime 훅의 경로에 맞게 조정하세요

export default function Clock({ format = 'YYYY-MM-DD HH:mm:ss' }) {
  const currentTime = useCurrentTime(format);
  return <div>{currentTime}</div>;
}
