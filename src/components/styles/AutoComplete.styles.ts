import { styled } from "styled-components";

const AutoCompleteContainer = styled.div`   
    max-height:300px;
    overflow-y:auto;
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius:10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width:94%;
    margin-top:10px;
`

export const ListItems = styled.div`
    &:hover{
        cursor:pointer;
        background-color:${props=>props.theme.color.inactive};
    }
    padding:10px 15px;
`

export default AutoCompleteContainer