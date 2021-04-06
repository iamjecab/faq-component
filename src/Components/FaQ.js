import React from "react";
import styled from "styled-components";

import questions from "../data";
import Question from "./Question";

const Wrapper = styled.div`
    background-color: white;
    padding: 20px;
    width: 90%;
    max-width: 950px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 2px black;
    display: flex;
    color: #102a42;
    align-items: flex-start;
    flex-direction: column;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

const TitleContainer = styled.div`
    flex-basis: 30%;
    margin-top: 15px;
`;

const Title = styled.h1`
    font-size: 28px;
`;

const QuestionsContainer = styled.div`
    flex-basis: 70%;
`;

const FaQ = () => {
    return (
        <>
            <Wrapper>
                <TitleContainer>
                    <Title>Questions And Answers About Login</Title>
                </TitleContainer>
                <QuestionsContainer>
                    {questions.map((question) => {
                        return (
                            <Question question={question} key={question.id} />
                        );
                    })}
                </QuestionsContainer>
            </Wrapper>
        </>
    );
};

export default FaQ;
