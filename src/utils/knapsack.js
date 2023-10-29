function knapsack(items, capacity) {
    const n = items.length;

    const dp = new Array(n + 1)
        .fill(null)
        .map(() => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const item = items[i - 1];
        for (let w = 1; w <= capacity; w++) {
            if (item.weight > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                const maxQuantity = Math.min(
                    item.quantity,
                    Math.floor(w / item.weight)
                );
                let maxValue = 0;
        
                for (let q = 0; q <= maxQuantity; q++) {
                    const includeValue =
                    q * item.value + dp[i - 1][w - q * item.weight];
                    if (includeValue > maxValue) {
                        maxValue = includeValue;
                    }
                }
                dp[i][w] = maxValue;
            }
        }
    }

    const selectedItemsWithQuantities = [];
    let i = n;
    let w = capacity;

    while (i > 0 && w > 0) {
        if (dp[i][w] !== dp[i - 1][w]) {
            const item = items[i - 1];
            const maxQuantity = Math.min(
                item.quantity,
                Math.floor(w / item.weight)
            );
            let quantity = 0;
            for (let q = 0; q <= maxQuantity; q++) {
                if (dp[i][w] === q * item.value + dp[i - 1][w - q * item.weight]) {
                    quantity = q;
                    break;
                }
            }
        
            if (quantity > 0) {
                selectedItemsWithQuantities.push({
                    ...item,
                    quantity,
                });
                w -= quantity * item.weight;
            }
        }
        i--;
    }

    return {
        maxValue: dp[n][capacity],
        selectedItems: selectedItemsWithQuantities.reverse(),
    };
}

export default knapsack()

// Exemplo
const items = [
    { name: "Item 1", weight: 5, value: 10, quantity: 1 },
    { name: "Item 2", weight: 4, value: 40, quantity: 1 },
    { name: "Item 3", weight: 6, value: 30, quantity: 1 },
    { name: "Item 4", weight: 3, value: 50, quantity: 1 },
];
const capacity = 10;
const result = knapsack(items, capacity);

console.log("Max Value:", result.maxValue);
console.log("Selected Items with Quantities:", result.selectedItems);
