'use client';
/**
 * Next.js 와 같은 서버 사이드 렌더링(SSR) 환경에서
 * 실시간으로 변하는 데이터(예: 현재 시간)를 다루면서 클라이언트 사이드 렌더링(CSR) 컴포넌트를 사용할 때,
 * 서버와 클라이언트 간의 내용 불일치로 인한 하이드레이션(hydration) 에러가 발생할 수 있습니다.
 *
 * 이는 서버에서 렌더링된 초기 HTML 과 클라이언트에서 렌더링된 결과가 달라서 생기는 문제입니다.
 *
 * 따라서 이런 경우 동적 임포트를 사용하여 클라이언트 사이드에서만 렌더링되도록 해야합니다.
 */
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const ClockWithNoSSR = dynamic(() => import('@components/clock'), {
  ssr: false,
});

const StyledPage = styled.div`
  height: 500px;
  padding: 30px;
  background-color: aqua;
`

const ClockArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  padding: 10px;
  width: 250px;
  min-height: 50px;
  background-color: white;
`

const Title = styled.div`
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
`

export default function Page() {
  return (
    <StyledPage>
      <ClockArea>
        <Title>Clock</Title>
        <ClockWithNoSSR />
      </ClockArea>
    </StyledPage>
  );
}
