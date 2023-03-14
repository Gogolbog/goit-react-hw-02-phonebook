import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
width: 300px;
  padding: 0;
  margin: 0 auto;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #f7f7f7;
    border-radius: 5px;
  }

  button {
    padding: 5px 10px;
    background-color: #ff4d4d;
    border: none;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e60000;
    }
  }
`;