import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const Wrapper = styled.div`
    padding: 18px;
    margin: 15px 5px;
    box-shadow: 1px 1px 4px 1px gray;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h4`
    font-size: 20px;
`;

const Icons = styled.div``;

const PlusIcon = styled(AiOutlinePlusSquare)`
    font-size: 28px;
    color: red;
    cursor: pointer;
`;

const MinusIcon = styled(AiOutlineMinusSquare)`
    font-size: 28px;
    color: red;
    cursor: pointer;
`;

const Answer = styled.p`
    margin-top: 14px;
`;

const Question = ({ question }) => {
    const { title, info } = question;
    const [showAnswer, setshowAnswer] = useState(false);

    const toggle = () => {
        setshowAnswer(!showAnswer);
    };

    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>{title}</Title>
                    <Icons>
                        {showAnswer ? (
                            <MinusIcon onClick={toggle} />
                        ) : (
                            <PlusIcon onClick={toggle} />
                        )}
                    </Icons>
                </TitleWrapper>
                {showAnswer ? <Answer>{info}</Answer> : null}
            </Wrapper>
        </>
    );
};

export default Question;
