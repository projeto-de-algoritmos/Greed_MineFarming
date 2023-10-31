import "./mine.css"; 
import Plant from "./plant";
import { useEffect, useState } from "react"; // Importe o useState
import LinearProgress from '@mui/material/LinearProgress';
import knapsack from "./utils/knapsack";

function Mine() {

  const [inputPlant, setInputPlant] = useState('trigo')
  const [inputAmount, setInputAmount] = useState(0); // Estado para armazenar a quantidade de plantas
  const [plantsValue, setPlantsValue] = useState([]); // Estado para armazenar o valor das plantas
  const [plantsWeight, setPlantsWeight] = useState([]); // Estado para armazenar o peso das plantas
  const [knapsackLimit, setKnapsackLimit] = useState()
  const [progress, setProgress] = useState();  // Estado para controlar o valor da barra de progresso
  const [userValue, setUserValue] = useState(0);
  const [answer, setAnswer] = useState();
  
  const handleRegister = () => {    
    if (knapsackLimit - inputAmount >= 0) {
      setKnapsackLimit(knapsackLimit - inputAmount);
      setProgress(progress + inputAmount);
      switch (inputPlant) {
        case "trigo":
          if(inputAmount <= plantsWeight){
            setUserValue(userValue + ((plantsValue[0] / plantsWeight[0]) * inputAmount))
          } else {
            console.log("peso ultrapassou o disponível")
          }
          break;

        case "batata":
          if(inputAmount <= plantsWeight){
            setUserValue(userValue + ((plantsValue[1] / plantsWeight[1]) * inputAmount))
          } else {
            console.log("peso ultrapassou o disponível")
          }
          break;
          
        case "cenoura":
          if(inputAmount <= plantsWeight){
            setUserValue(userValue + ((plantsValue[2] / plantsWeight[2]) * inputAmount))
          } else {
            console.log("peso ultrapassou o disponível")
          }
          break;
          
        case "beterraba":
          if(inputAmount <= plantsWeight){
            setUserValue(userValue + ((plantsValue[3] / plantsWeight[3]) * inputAmount))
          } else {
            console.log("peso ultrapassou o disponível")
          }
          break;

        case "melancia":
          if(inputAmount <= plantsWeight){
            setUserValue(userValue + ((plantsValue[4] / plantsWeight[4]) * inputAmount))
          } else {
            console.log("peso ultrapassou o disponível")
          }
          break;
          
        case "abobora":
          if(inputAmount <= plantsWeight){
            setUserValue(userValue + ((plantsValue[5] / plantsWeight[5]) * inputAmount))
          } else {
            console.log("peso ultrapassou o disponível")
          }
          break;  
      }

    } else {
      console.log("passou do limite")
    }
  };

  const handleReset = () => {
    setKnapsackLimit(100)
    setProgress(0)
    setUserValue(0)
    setAnswer(knapsack(generateProblem(), 100))
  }

  const handleEmpty = () => {
    setKnapsackLimit(100)
    setProgress(0)
    setUserValue(0)
  }

  const handleCheck = () => {
    if (knapsackLimit == 0){
      if(userValue >= answer){
        console.log("ganhou")
      } else {
        console.log("perdeu")
      }
    }
  }

  const generateProblem = () => {
    let value = []
    let weight = []
    for(let i = 0; i <= 5; i++){
      value[i] = Math.floor(Math.random() * 15) + 5
      weight[i] = Math.floor(Math.random() * 50) + 20
    }
    setPlantsValue(value)
    setPlantsWeight(weight)

    let items = [
      { name: "trigo", weight: weight[0], value: value[0] },
      { name: "batata", weight: weight[1], value: value[1] },
      { name: "cenoura", weight: weight[2], value: value[2] },
      { name: "beterraba", weight: weight[3], value: value[3] },
      { name: "melancia", weight: weight[4], value: value[4] },
      { name: "abobora", weight: weight[5], value: value[5] }
    ];

    return items
  }

  useEffect(() => {
    setAnswer(knapsack(generateProblem(), 100))
    setKnapsackLimit(100)
    setProgress(0)
    
  }, [])


  return (
    <div className="page">

      <div className="title-container">
        <h1>MineFarming</h1>
      </div>

      <div className="description-container">
        <div className="description-rectangle">
          <p className="description">Bem-vindo(a) a MineFarming, um simulador de plantação e venda de produtos do Minecraft, utilizamos o knapsack para determinar a maneira mais lucrativa de encher uma plantação para que se possa maximizar o ganho de esmeraldas, porém queremos que você tenha a oportunidade de descobrir isso sozinho(a), então escolha qual produto você deseja plantar e quanto deseja adicionar à plantação e informaremos quanto irá receber por isso, se conseguir maximizar o lucro com os valores dados, você ganha!!!</p>
        </div>
      </div>

      <div className="knapsack">
        <div className="plant-container">
          <Plant type={"Trigo"} value={plantsValue[0]} weight={plantsWeight[0]} image="https://i.imgur.com/Dm8wkHi.jpg" />
          <Plant type={"Batata"} value={plantsValue[1]} weight={plantsWeight[1]} image="https://i.imgur.com/bWT8w9c.jpg" />
          <Plant type={"Cenoura"} value={plantsValue[2]} weight={plantsWeight[2]} image="https://i.imgur.com/TDxiSZE.jpg" />
          <Plant type={"Beterraba"} value={plantsValue[3]} weight={plantsWeight[3]} image="https://i.imgur.com/GvljP5e.jpg" />
          <Plant type={"Melancia"} value={plantsValue[4]} weight={plantsWeight[4]} image="https://i.imgur.com/NWrAQPW.jpg" />
          <Plant type={"Abóbora"} value={plantsValue[5]} weight={plantsWeight[5]} image="https://i.imgur.com/ei3Qtgf.jpg"  />
        </div>

        <div className="handle-game">
          <p>Progresso da colheita:</p>
          <LinearProgress variant="determinate" value={progress} />

          <div className="selection-container">
            <label htmlFor="plant">Selecione a Planta que quer adicionar:</label>
            <select id="plant" name="plant" onChange={(e) => setInputPlant(e.target.value)}>
              <option value="trigo">Trigo</option>
              <option value="batata">Batata</option>
              <option value="cenoura">Cenoura</option>
              <option value="beterraba">Beterraba</option>
              <option value="melancia">Melancia</option>
              <option value="abobora">Abóbora</option>
            </select>

          </div>

          <input
            type="number"
            placeholder="Insira a quantidade"
            className="input"
            onChange={(e) => setInputAmount(e.target.valueAsNumber)} // Atualiza o estado com o valor do input
          />

          <button onClick={() => handleRegister()}>Implemente a quantidade</button>
          
          <div className="handle-result">

            <p> Valor atual: {userValue} </p>

            <button onClick={() => handleEmpty()}> Esvaziar plantação </button>
            <button onClick={() => handleCheck()}> Checar resultado </button>
            <button onClick={() => handleReset()}> Reiniciar </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Mine;
