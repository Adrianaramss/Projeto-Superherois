import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, Image, Box,ModalBody } from "@chakra-ui/react";

function BattleModal({ isOpen, onClose, selectedHeroes }) {
  const calculateTotalPower = (hero) => {
    return (
      hero.powerstats.intelligence +
      hero.powerstats.strength +
      hero.powerstats.speed +
      hero.powerstats.durability +
      hero.powerstats.power +
      hero.powerstats.combat
    );
  }

  const determineWinner = () => {
    if (selectedHeroes.length !== 2) {
      return "Selecione exatamente 2 heróis para a batalha.";
    }

    const totalPowerHero1 = calculateTotalPower(selectedHeroes[0]);
    const totalPowerHero2 = calculateTotalPower(selectedHeroes[1]);

    if (totalPowerHero1 > totalPowerHero2) {
      return `${selectedHeroes[0].name} vence a batalha!`;
    } else if (totalPowerHero2 > totalPowerHero1) {
      return `${selectedHeroes[1].name} vence a batalha!`;
    } else {
      return "Empate! Ambos os heróis têm o mesmo poder.";
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent background="black" top="20px" >
      <ModalCloseButton cursor={'pointer'} height={"30px"} width={"50px"}  />
        <p style={{ color: '#00FF00', textAlign: 'center', fontSize: '30px', fontFamily: 'Roboto, sans-serif'  }}>
          {determineWinner()}
        </p>
        <ModalBody>
          <Box display="flex" justifyContent="space-around" color="white" fontSize="robot" >
            {selectedHeroes.map((hero) => (
              <div key={hero.id}>
                <Image src={hero.images.md} alt={hero.name} borderRadius="20px" height={"400px"} />
                <div style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
                  <p>Name: {hero.name}</p>
                  <p>Intelligence: {hero.powerstats.intelligence}</p>
                  <p>Strength: {hero.powerstats.strength}</p>
                  <p>Speed: {hero.powerstats.speed}</p>
                  <p>Durability: {hero.powerstats.durability}</p>
                  <p>Power: {hero.powerstats.power}</p>
                  <p>Combat: {hero.powerstats.combat}</p>
                </div>
              </div>
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default BattleModal;