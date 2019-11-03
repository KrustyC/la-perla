import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  ${media.lessThan('medium')`
    height: 400px;
  `}

  img {
    width: 100%;
  }
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &.leave {
    transform: translateX(0);
  }
  &.enter-active.enter-next,
  &.enter-active.enter-prev {
    transform: translateX(0);
    transition: transform 500ms linear;
  }
  &.enter-next {
    transform: translateX(100%);
  }
  &.enter-prev {
    transform: translateX(-100%);
    transition: transform 500ms linear;
  }
  &.leave-active-next {
    transform: translateX(-100%);
    transition: transform 500ms linear;
  }
  &.leave.leave-active-prev {
    transform: translateX(100%);
    transition: transform 500ms linear;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0;
  }
`;

export const HistoryContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const HistoryButton = styled.button`
  border: none;
  outline: none;
  margin: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;

  background: #fff;
  transition: background-color 300ms ease;

  ${({ active }) =>
    !active &&
    css`
      opacity: 0.4;
    `}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
`;

export const Icon = styled.div`
  margin: 0;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    fill: white;
  }
`;
