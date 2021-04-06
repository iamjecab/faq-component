import React from "react";
import styled from "styled-components";
import FaQ from "./Components/FaQ";

import GlobalStyles from "./Components/GlobalStlyles";

const AppContainer = styled.div`
    width: 100;
    height: 100vh;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <AppContainer>
                <FaQ />
            </AppContainer>
        </>
    );
}

export default App;
