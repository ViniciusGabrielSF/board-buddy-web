import { Typography } from '../../../../design-system/components/Typography';
import { ListItemContainer } from './GamesList.styles';

export const GamesListItem = ({ game : { name, description}, even, header}) => {
  return (
    
    <ListItemContainer even={even} header={header}>
        <Typography variant="paragraphRegular" color={'inherit'}  >
            {name}
        </Typography>
        <Typography variant="paragraphRegular" color={'inherit'} >
            {description}
        </Typography>

        {
          header && 
          <Typography variant="paragraphRegular" color={'inherit'} >
          Status
      </Typography>
        }
    </ListItemContainer>

  )
}


