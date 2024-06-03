import { Typography } from '../../../../design-system/components/Typography';
import { ListItemContainer } from './GamesList.styles';

export const GamesListItem = ({ game : { nome, descricao}}) => {
  return (
    
    <ListItemContainer>
        <Typography variant="paragraphRegular" style={{background:  'transparent' }} >
            {nome}
        </Typography>
        <Typography variant="paragraphRegular" >
            {descricao}
        </Typography>
    </ListItemContainer>

  )
}


