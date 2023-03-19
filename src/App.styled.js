import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto; 
    padding: 84px 16px;

    @media screen and (max-width: 823.98px) {
       max-width: 412px;
    }

    @media screen and (min-width: 824px) {
        width: 824px;
    }

    @media screen and (min-width: 1240px) {
        width: 1240px;
    }
`

export const UserList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    @media screen and (min-width:  824px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`