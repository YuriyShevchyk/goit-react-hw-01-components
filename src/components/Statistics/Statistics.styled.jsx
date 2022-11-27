import styled from "styled-components";

export const StatSection = styled.section`
  margin: 20px auto;
  text-align: center;
  width: 300px;
  height: 100%;
  background-color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  padding: 10px 0;
  `;

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    
    li {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: 100%;
`; 

export const Label = styled.span`
  display: block;
  color: #fff;
`;

export const Quantity = styled.span`
  display: block;
  color: #fff;
  font-weight: 700;
  margin-top: 4px;
  font-size: 1.3em;
`;