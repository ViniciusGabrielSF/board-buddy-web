import styled from 'styled-components';
import { Spacing } from '../../../../design-system/tokens/';

// export const ChatHolder = styled.div`
//   flex-grow: 1;
//   height: 0px;
//   overflow-y: auto;
//   margin-top: ${Spacing.Micro};

//   ::-webkit-scrollbar {
//     width: 0px;
//     background: transparent;
//   }
// `;

// export const ActionHolder = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: ${Spacing.Medium};
//   width: 100%;
// `;

export const ListItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: ${Spacing.HyperSmall};

    :nth-child(even) {background: #CCC}
    :nth-child(odd) {background: #FFF}

`;

export const ListContainer = styled.div`
    width:80%;
`;
