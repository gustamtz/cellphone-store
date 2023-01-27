import styled from "styled-components";

export const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #f2f23a;
  padding: 20px;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: #211f1f;
    transition: 1s;

    &:hover {
      opacity: 60%;
      transition: 1s;
    }
  }
`;
