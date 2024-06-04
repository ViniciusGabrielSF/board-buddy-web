import { Typography } from '../../../../design-system/components/Typography';
import { Avaliable, AvaliableContainer, ListItemContainer } from './GamesList.styles';

export const GamesListItem = ({ game : { name, description, avaliable}, even, header}) => {
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
          <AvaliableContainer>
            <Avaliable avaliable={avaliable}/>
            <Typography variant="paragraphRegular" color={'inherit'}  >
              {avaliable ?  'Disponível' : 'Emprestado'}
            </Typography>
          </AvaliableContainer>
        }

    </ListItemContainer>

  )
}


