import styled from "styled-components";

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
