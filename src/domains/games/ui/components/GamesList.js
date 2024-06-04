import { ListContainer } from './GamesList.styles';
import { GamesListItem } from './GamesListItem';

import { useGames } from '../../application/hooks/useGames';

function GamesList() {
  const { games } = useGames();
  console.log(games);

  if(!games) return null;

  return (
    <ListContainer>
       <GamesListItem game={{name: 'Nome', description : 'Descricao', available: true  }} header={true} />
  
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