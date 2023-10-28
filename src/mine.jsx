import "./mine.css"; 
import Plant from "./plant";
// import { useState } from "react"; // Importe o useState

function Mine() {

  // // Estado para controlar o valor da barra de progresso
  // const [progress, setProgress] = useState(0);

  // // Função para simular o progresso da colheita
  // const handleHarvest = () => {
  //   if (progress < 100) {
  //     setProgress(progress + 10); // Incrementa o progresso em 10 (ajuste conforme necessário)
  //   } else {
  //     // Você atingiu o valor máximo, adicione lógica aqui
  //   }
  // };

  return (
    <div className="page">

      <div className="title-container">
        <h1>MineFarming</h1>
      </div>

      <div className="description-container">
        <div className="description-rectangle">
          <p className="description">Nossa aplicação utiliza o Algoritmo de Knapsack para que possamos realizar uma colheita eficiente da produção de plantas de uma vila do Minecraft </p>
        </div>
      </div>

      <div className="knapsack">
        <div className="plant-container">
          <Plant type={"Cenoura"} value={5} quantity={10} image="https://i.imgur.com/TDxiSZE.jpg" />
          <Plant type={"Batata"} value={8} quantity={15} image="https://i.imgur.com/bWT8w9c.jpg" />
          <Plant type={"Trigo"} value={6} quantity={12} image="https://i.imgur.com/Dm8wkHi.jpg"  />
        </div>

        <div className="handle-game">
          <p>Progresso da colheita:</p>
          <progress  max={100}></progress> {/* Barra de progresso */}

          <div className="button-container">
            <button> tipo de planta</button>
            <button> quantidade </button>
            <button> input add</button>
          </div>
          
          <div className="handle-result">

            <p> Valor atual: ?</p>

            <p> Ainda cabe mais plantas na sua bolsa</p>

            <button> Reiniciar </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Mine;
