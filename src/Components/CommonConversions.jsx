const commonConversions = [
  { from: "cm", to: "inches", label: "cm to inches" },
  { from: "inches", to: "cm", label: "inches to cm" },
  { from: "kg", to: "lbs", label: "kg to lbs" },
  { from: "lbs", to: "kg", label: "lbs to kg" },
  { from: "Celsius", to: "Fahrenheit", label: "Celsius to Fahrenheit" },
  { from: "Fahrenheit", to: "Celsius", label: "Fahrenheit to Celsius" },
  { from: "mm", to: "inches", label: "mm to inches" },
  { from: "inches", to: "mm", label: "inches to mm" },
  { from: "meters", to: "feet", label: "meters to feet" },
  { from: "feet", to: "meters", label: "feet to meters" },
  { from: "km", to: "miles", label: "km to miles" },
  { from: "miles", to: "km", label: "miles to km" },
  { from: "cm", to: "feet", label: "cm to feet" },
  { from: "feet", to: "cm", label: "feet to cm" },
  { from: "grams", to: "ounces", label: "grams to ounces" },
  { from: "ounces", to: "grams", label: "ounces to grams" },
  { from: "inches", to: "feet", label: "inches to feet" },
  { from: "feet", to: "inches", label: "feet to inches" },
  { from: "liters", to: "gallons", label: "liters to gallons" },
  { from: "gallons", to: "liters", label: "gallons to liters" },
  { from: "pounds", to: "ounces", label: "pounds to ounces" },
  { from: "ounces", to: "pounds", label: "ounces to pounds" },
  { from: "mph", to: "kph", label: "mph to kph" },
  { from: "kph", to: "mph", label: "kph to mph" },
  { from: "acres", to: "square feet", label: "acres to square feet" },
  { from: "square feet", to: "acres", label: "square feet to acres" },
  { from: "radians", to: "degrees", label: "radians to degrees" },
  { from: "degrees", to: "radians", label: "degrees to radians" },
  { from: "hp", to: "kw", label: "hp to kw" },
  { from: "kw", to: "hp", label: "kw to hp" },
]

const CommonConversions = () => {
  return (
    <div className="common-conversions-card">
      <h3 className="common-conversions-title">Common Conversions</h3>
      <div className="conversions-grid">
        {commonConversions.map((conversion, index) => (
          <div key={index} className="conversion-item">
            <span className="conversion-bullet"></span>
            <a href="#" className="conversion-link">
              {conversion.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommonConversions
