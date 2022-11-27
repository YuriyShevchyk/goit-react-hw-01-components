import styled from "styled-components";

export const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export const Item  = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  margin-left: 8px;
  font-weight: 700;
`;

export const FriendAvatar = styled.img`
  margin: 0 8px;
`;

export const FriendStatus = styled.span`
  border-radius: 50px;
  display: block;
  height: 16px;
  margin: 0 8px;
  width: 16px;
  background-color: ${props => {
    switch (props.isOnline ) {
        case "true": return 'green';
        case "false": return 'red';
    }
  }};
`;