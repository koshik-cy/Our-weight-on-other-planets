 function calculateWeight() {
      const weight = parseFloat(document.getElementById("weightInput").value);
      const planet = document.getElementById("planetSelect").value;
      const result = document.getElementById("result");

      if (isNaN(weight) || weight <= 0) {
        result.textContent = "🚫 Please enter a valid weight.";
        return;
      }

      const gravity = {
        Mercury: 0.38,
        Venus: 0.91,
        Earth: 1,
        Mars: 0.38,
        Jupiter: 2.34,
        Saturn: 1.06,
        Uranus: 0.92,
        Neptune: 1.19,
        Pluto: 0.06,
      };

      const newWeight = (weight * gravity[planet]).toFixed(2);
      result.textContent = `⚖️ Your weight on ${planet} is ${newWeight} kg.`;
    }