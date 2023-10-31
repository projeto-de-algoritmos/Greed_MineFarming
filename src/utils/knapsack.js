function knapsack(items, capacity) {
  // Calculo de proporção valor/peso
  items = items.map((item) => ({
    ...item,
    ratio: item.value / item.weight,
  }));

  // Ordena por proporção, maior para menor
  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  let knapsack = [];

  for (const item of items) {
    // Caso a mochila esteja cheia, encerra o loop
    if (capacity <= 0) {
      break;
    }

    const weightToTake = Math.min(item.weight, capacity);
    const itemValue = item.ratio * weightToTake;

    totalValue += itemValue;
    knapsack.push({ ...item, taken: weightToTake });

    capacity -= weightToTake;
  }

  console.log("Total Value:", totalValue);
  console.log("Items in Knapsack:", knapsack);

  return totalValue;
}

export default knapsack

// Exemplo de teste
// const items = [
//   { name: "Item 1", weight: 10, value: 5 },
//   { name: "Item 2", weight: 20, value: 12 },
//   { name: "Item 3", weight: 30, value: 17 },
// ];
// const capacity = 45;
// const result = knapsack(items, capacity);
