import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Components/UserCard/UserCard';
import { CardSuperContainer, AppContainer } from '../../Components/UserCard/UserCardstyled';
import TextField from '@mui/material/TextField';
import BattleModal from '../../Components/Modal/BattleModal';

function HomePage() {
  const [superheroes, setSuperheroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://cors-anywhere.herokuapp.com/http://homologacao3.azapfy.com.br/api/ps/metahumans");
        setSuperheroes(response.data);
      } catch (error) {
        console.error("Error fetching superheroes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleHeroClick = (hero) => {
    setSelectedHeroes([...selectedHeroes, hero]);

    if (selectedHeroes.length === 1) {
      setIsModalOpen(true);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHeroes([]);
  }

  const sortedSuperheroes = [...superheroes].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const filteredSuperheroes = sortedSuperheroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase())
  );

  const SortOrd = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  return (
    <AppContainer>
      <div>
        <h1>Lista de Super-Heróis</h1>

        {loading ? (
          <p style={{ color: 'white' }}>Loading...</p> 
        ) : (
          <div>
            <TextField
              label="Filtrar por nome"
              variant="outlined"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ backgroundColor: 'white' }}
            />
           
    <p style={{ color: 'white', marginTop: '5px' }} >
    Ordenar: <button  onClick={SortOrd}style={{ cursor: 'pointer' }}>
    {sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}
    </button>
    </p>
</div>



        )}

        {!loading && filteredSuperheroes.length > 0 ? (
          <CardSuperContainer>
            {filteredSuperheroes.map((hero) => (
              <Card key={hero.id} hero={hero} onClick={handleHeroClick} />
            ))}
          </CardSuperContainer>
        ) : !loading && (
          <p style={{ color: 'white' }}>Super-Herói não encontrado!</p>
        )}

        <BattleModal isOpen={isModalOpen} onClose={closeModal} selectedHeroes={selectedHeroes} />
      </div>
    </AppContainer>
  );
}

export default HomePage;
