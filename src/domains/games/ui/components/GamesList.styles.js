import styled from 'styled-components';
import { Spacing } from '../../../../design-system/tokens/';
import { Color, BorderRadius } from '../../../../design-system/tokens';


export const ListItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${Spacing.HyperSmall};

    background-color: ${props => props.header ? Color.Neutral900 : ( props.even ? Color.White : Color.Neutral200)};
    color: ${props => props.header ? Color.White : Color.Neutral900};    

`;

export const AvaliableContainer = styled.div`
    display: flex;
    align-items:center;
    gap: .5em;
`;

export const Avaliable = styled.div`
    width: .7em;
    height: .7em;
    border-radius: ${BorderRadius.Large};

    background-color: ${props => props.avaliable ? Color.Teal600 : Color.Rose600 };


`;

export const ListContainer = styled.div`

    -webkit-box-shadow: 5px 5px 28px 0px rgba(191,191,191,1);
    -moz-box-shadow: 5px 5px 28px 0px rgba(191,191,191,1);
    box-shadow: 5px 5px 28px 0px rgba(191,191,191,1);
`;
