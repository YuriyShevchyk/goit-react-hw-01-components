import styled from "styled-components";

export const ProfileContainer =styled.div`
 margin: 20px auto;
 text-align: center;
 width: 300px;
 height: 100%;
 background-color: #fff;
 border: 2px solid darkgrey;
`;

export const Avatar = styled.img`
 width: 100px;
 border-radius: 50%;
 border: 1px solid #e4e9f0;
`;

export const ProfileDescription = styled.div`
 padding: 20px;
 `;

export const UserInfo = styled.p`
color: grey;
font-size: 16px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  background-color: #f3f6f9;
  li {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #e4e9f0;
    border-right: 1px solid #e4e9f0;
    border-top: 1px solid #e4e9f0;
  }
`;

export const Label = styled.span`
display: block;
color: grey;
font-size: 16px;
`;

export const Quantity = styled.span`
font-weight: 700;
font-size: 18px;
`;