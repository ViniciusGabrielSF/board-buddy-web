import { ListContainer } from './GamesList.styles';
import { GamesListItem } from './GamesListItem';

function GamesList() {
    const games = [{nome: 'nome do jogo', descricao: 'descricao', disponivel:true },
    {nome: 'nome do jogo', descricao: 'descricao', disponivel:true }]
  return (
    
    <ListContainer>
      
       <GamesListItem game={{nome: 'Nome', descricao : 'Descricao' }} />
          {games.map((game, idx) => {
            return (
              <div key={idx} style={{ marginBottom: '15px' }}>
                <GamesListItem
                    game={game}
                />
              </div>
            );
          })}
    </ListContainer>
  )
}

export default GamesList