import { conversionData } from "./conversionData"

export function convertUnit(value, fromUnit, toUnit, category) {
  const categoryData = conversionData[category]
  if (!categoryData) return 0

  const fromUnitData = categoryData.units.find((unit) => unit.name === fromUnit)
  const toUnitData = categoryData.units.find((unit) => unit.name === toUnit)

  if (!fromUnitData || !toUnitData) return 0

  // Special handling for temperature
  if (category === "Temperature") {
    return convertTemperature(value, fromUnit, toUnit)
  }

  // Convert to base unit first, then to target unit
  const baseValue = value * fromUnitData.factor
  const result = baseValue / toUnitData.factor

  return Math.round(result * 1000000) / 1000000 // Round to 6 decimal places
}

function convertTemperature(value, fromUnit, toUnit) {
  let celsius

  // Convert to Celsius first
  switch (fromUnit) {
    case "Celsius":
      celsius = value
      break
    case "Fahrenheit":
      celsius = ((value - 32) * 5) / 9
      break
    case "Kelvin":
      celsius = value - 273.15
      break
    case "Rankine":
      celsius = ((value - 491.67) * 5) / 9
      break
    default:
      return 0
  }

  // Convert from Celsius to target unit
  switch (toUnit) {
    case "Celsius":
      return Math.round(celsius * 1000000) / 1000000
    case "Fahrenheit":
      return Math.round(((celsius * 9) / 5 + 32) * 1000000) / 1000000
    case "Kelvin":
      return Math.round((celsius + 273.15) * 1000000) / 1000000
    case "Rankine":
      return Math.round(((celsius * 9) / 5 + 491.67) * 1000000) / 1000000
    default:
      return 0
  }
}
