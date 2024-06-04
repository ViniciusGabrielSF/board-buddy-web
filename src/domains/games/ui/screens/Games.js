// import { Button } from '../../../../design-system/components/Button';
import {
  InputText
} from '../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../design-system/components/FormGroup/InputGroup';
import GamesList from '../components/GamesList';
import { useState } from 'react';
import { Container, SearchContainer } from './Games.styles';
// import { Icon, Icons } from '../../../../design-system/foundations/Icons';


function Games() {

    const [search, setSearch] = useState('');
    const onSearchChange = (event) => {
      setSearch(event.target.value);
    };
    // const onSearch = () => {
    //   games.filter(game => game.name = search);
    //  }


    const games = [{name: 'nome do jogo', description: 'description', available:true },
    {name: 'nome do jogo', description: 'description'},
    {name: 'nome do jogo', description: 'description', available: true  },
    {name: 'nome do jogo', description: 'description'  }]

    
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

            {/* <IconButton type="button" onClick={onSearch}>
                <Icon icon={Icons.Search} variant="solid" />
            </IconButton> */}

        </SearchContainer>

        <GamesList games={games} />
                    
   </Container>
  )
}

export default Games