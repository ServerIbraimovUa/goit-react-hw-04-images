import styled from 'styled-components';

/*
 * Стили компонента Buton (Load more)
 */
export const Button = styled.button`
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin-bottom: 20px;
  color: #fff;
  border: 0;
  cursor: pointer;
  min-width: 180px;
  height: 60px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
