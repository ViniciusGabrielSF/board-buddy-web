 import { Button } from '../../../../design-system/components/Button';
import {
  InputText
} from '../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../design-system/components/FormGroup/InputGroup';
import GamesList from '../components/GamesList';
import { useState } from 'react';
import { Container, SearchContainer } from './Games.styles';
import { useGames } from '../../application/hooks/useGames';
import { Icon, Icons } from '../../../../design-system/foundations/Icons';

function Games() {
  const { games, searchGamesByName } = useGames();
  const [search, setSearch] = useState('');

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
    
  return (
   <Container>
        <SearchContainer>
            <InputGroup label="Pesquisa" htmlFor="pesquisa">
                    <InputText
                        placeholder="Digite o nome de um jogo..."
                        id="pesquisa"
                        name="pesquisa"
                        onChange={onSearchChange}
                        value={search}
                        
                    />
            </InputGroup>

            <div style={{ maxHeight: '52px'}}>
              <Button type="button" onClick={() => void searchGamesByName(search)}>
                  <Icon icon={Icons.Sparkles} variant="solid" />
              </Button>
            </div>

        </SearchContainer>

        <GamesList games={games} />
                    
   </Container>
  )
}

export default Games