import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Museo -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    z-index: 1;
    margin: 0 5vw;

    @media (min-width: 800px) {
        flex-direction: row;
        height: 70px;
    }
`;