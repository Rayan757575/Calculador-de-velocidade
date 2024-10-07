import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ theme, bg }) => (bg ? theme.colors[bg] : 'white')};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
  padding:  ${({ theme, p }) => (p ? `${theme.metrics.px(p)}px` : '0')}
`;
