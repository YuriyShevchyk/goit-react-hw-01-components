import styled from "styled-components";

export const TransactionTable = styled.table`
  background-color: #fff;
  border-spacing: 0;
  margin: 20px auto;
  max-width: 600px;
  padding: 0;
  width: 100%;

  thead {
    background-color: rgb(0, 188, 213);
    color: rgb(255, 255, 255);

  th {
    border-right: 1px solid #fff;
    font-weight: 400;
    padding: 16px 0;
    text-transform: uppercase;
  

    
  tr:nth-child(even) {
    background: #ecf1f4;  
`; 

export const ItemInfo = styled.td`
    border-bottom: 1px solid #e4e9f0;
    border-right: 1px solid #e4e9f0;
    color: #768696;
    padding: 16px;
    text-align-last: center;
`;