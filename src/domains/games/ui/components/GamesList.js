import { ListContainer } from './GamesList.styles';
import { GamesListItem } from './GamesListItem';

function GamesList({ games }) {
  if(!games) return null;

  return (
    <ListContainer>
       <GamesListItem game={{name: 'Nome', description : 'Descrição'  }} header={true} />
          {games.map((game, idx) => {
            return (
              <div key={idx} >
                 <GamesListItem
                    game={game}
                    even={idx%2}
                />
              </div>
            );
          })}
    </ListContainer>
  )
}

export default GamesList