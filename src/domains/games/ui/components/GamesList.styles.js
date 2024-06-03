import styled from 'styled-components';
import { Spacing } from '../../../../design-system/tokens/';


export const ListItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${Spacing.HyperSmall};

    background-color: ${props => props.header ? 'black' : ( props.even ? '#fff' : '#ededed')};
    color: ${props => props.header ? 'white' : 'black'};    

`;

export const ListContainer = styled.div`

    -webkit-box-shadow: 5px 5px 28px 0px rgba(191,191,191,1);
    -moz-box-shadow: 5px 5px 28px 0px rgba(191,191,191,1);
    box-shadow: 5px 5px 28px 0px rgba(191,191,191,1);
`;
