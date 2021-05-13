import React from 'react'

import styled from 'styled-components';

const Icon = styled.i`
    color: ${props => props.color || "white"};
    font-size:18px;
`;
const Label = styled.label`
    color: ${props => props.color || "white"};
`;

const ItemContainer = styled.div`
    margin-bottom: 1rem;
    margin-left: 2rem;
`;
const SpacerComponent = styled.div`
    flex:1;
`;



export const DrawItem = ({ title, iconName, onPress, color }) => {
    return (
        <ItemContainer className="item" onClick={onPress}>
            <Icon
                color={color}
                className={iconName}
            />
            <Label color={color}>{title}</Label>
        </ItemContainer>
    )
}
export const Spacer = () => {
    return (
        <SpacerComponent />
    )
}


