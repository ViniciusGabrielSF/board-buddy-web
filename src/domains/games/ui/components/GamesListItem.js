import { Typography } from '../../../../design-system/components/Typography';
import { Available, AvailableContainer, ListItemContainer } from './GamesList.styles';

export const GamesListItem = ({ game : { name, description, available}, even, header}) => {
  return (
    
    <ListItemContainer even={even} header={header}>
        <Typography variant="paragraphRegular" color={'inherit'}  >
            {name}
        </Typography>
        <Typography variant="paragraphRegular" color={'inherit'} >
            {description}
        </Typography>

        {
          header ?
          <Typography variant="paragraphRegular" color={'inherit'} >
            Status
          </Typography>
          :
          <AvailableContainer>
            <Available available={available}/>
            <Typography variant="paragraphRegular" color={'inherit'}  >
              {available ?  'Disponível' : 'Emprestado'}
            </Typography>
          </AvailableContainer>
        }

    </ListItemContainer>

  )
}


