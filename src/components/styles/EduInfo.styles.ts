import styled from "styled-components"

export const EduCard = styled.div`
    background-color:${props => props.theme.color.inactive};
    padding:50px;
    border-radius:20px;
`

export const UniversityName = styled.h2`
  font-size: 24px;
  margin: 5px 0;
`;

export const UniversityInfo = styled.p`
  font-size: 16px;
  margin-left:5px;
  color: ${props => props.theme.color.darkGrey};
`;

export const UniversityLink = styled.a`
  font-size: 16px;
  color: ${props => props.theme.color.darkGrey};
`;

export const InfoTitle = styled.h4`
    font-size: 14px;
    text-transform:uppercase;
    color:${props => props.theme.color.grey};
`

export const Grade = styled.p`
  font-size: 16px;
  color: #007bff;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;