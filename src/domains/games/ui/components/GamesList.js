import { ListContainer } from './GamesList.styles';
import { GamesListItem } from './GamesListItem';

function GamesList( {games}) {

  return (
    <ListContainer>
       <GamesListItem game={{name: 'Nome', description : 'Descricao'  }} header={true} />
  
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