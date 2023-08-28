document.addEventListener("DOMContentLoaded", () => {
    const expressionInput = document.getElementById("expression-input");
    const calculateButton = document.getElementById("calculate-button");
    const resultOutput = document.getElementById("result");
    const historyList = document.getElementById("history-list");

    calculateButton.addEventListener("click", async () => {
        const expression = expressionInput.value.trim();
        if (expression) {
            try {
                const response = await fetch(`http://localhost:3000/${encodeURIComponent(expression)}`);
                const data = await response.json();
                resultOutput.innerText = `Question: ${data.question}\nAnswer: ${data.answer}`;
                expressionInput.value = "";
                loadHistory();
            } catch (error) {
                console.error(error);
                resultOutput.innerText = "An error occurred. Please check your input.";
            }
        }
    });

    async function loadHistory() {
        try {
            const response = await fetch("http://localhost:3000/history");
            const history = await response.json();
            historyList.innerHTML = history.map(item => `<li>${item.question} = ${item.answer}</li>`).join("");
        } catch (error) {
            console.error(error);
        }
    }

    loadHistory();
});