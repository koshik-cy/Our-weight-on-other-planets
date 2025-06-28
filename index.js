function calculateWeight() {
  const weight = parseFloat(document.getElementById("weightInput").value);
  const planet = document.getElementById("planetSelect").value;
  const result = document.getElementById("result");

  if (isNaN(weight) || weight <= 0) {
    result.textContent = "🚫 Please enter a valid weight.";
    return;
  }

  // Actual gravity values in m/s²
  const gravity = {
    Mercury: 3.7,
    Venus: 8.87,
    Earth: 9.81,
    Mars: 3.71,
    Jupiter: 24.79,
    Saturn: 10.44,
    Uranus: 8.69,
    Neptune: 11.15,
    Pluto: 0.62
  };

  // More precise calculation using real gravity
  const newWeight = (weight * gravity[planet] / gravity["Earth"]).toFixed(2);
  result.textContent = `⚖️ Your weight on ${planet} is ${newWeight} kg.`;
}
