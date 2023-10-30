import styled from 'styled-components';


export const CarSuper = styled.div`
display: flex;
margin: 0 auto;
width: 203px;
height:380px;
transition: height 0.3s ease;
border: 1px solid #E0E0E0;
background-color:   #0053CD			;
border-radius: 12px;
margin-top: 20px;
box-shadow: 10px 10px 10px  rgba(0, 0, 0, 0.3);
flex-direction: column;
color: white;
font-family: 'Roboto', sans-serif;

h2{
  text-align: center; 

}

`;

export const CardSuperContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 0 auto;
max-width: 1200px;
font-family: 'Roboto', sans-serif;
cursor: pointer;
img{
    width: 201px;
    padding: 10px;
}
`


export const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p3/10796591-fundo-de-quadrinhos-azul-fundo-de-super-heroi-de-arte-pop-vintage-para-quadrinhos-vetor.jpg'); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: center;
  h1{
  color: white;
  
  }

`;