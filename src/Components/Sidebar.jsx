"use client"

const converterCategories = [
  {
    title: "All Converters",
    active: true,
  },
  {
    title: "Common Converters",
    converters: [
      "Length Converter",
      "Weight and Mass Converter",
      "Volume Converter",
      "Temperature Converter",
      "Area Converter",
      "Pressure Converter",
      "Energy Converter",
      "Volume - Dry Converter",
      "Currency Converter",
      "Case Converter",
      "Power Converter",
      "Force Converter",
      "Time Converter",
      "Speed Converter",
      "Angle Converter",
      "Fuel Consumption Converter",
      "Numbers Converter",
      "Data Storage Converter",
    ],
  },
  {
    title: "Engineering Converters",
    converters: [
      "Velocity - Angular Converter",
      "Acceleration Converter",
      "Acceleration - Angular Converter",
      "Density Converter",
      "Specific Volume Converter",
      "Moment of Inertia Converter",
      "Moment of Force Converter",
      "Torque Converter",
    ],
  },
  {
    title: "Heat Converters",
    converters: [
      "Fuel Efficiency - Mass Converter",
      "Fuel Efficiency - Volume Converter",
      "Temperature Interval Converter",
      "Thermal Expansion Converter",
      "Thermal Resistance Converter",
      "Thermal Conductivity Converter",
      "Specific Heat Capacity Converter",
      "Heat Density Converter",
      "Heat Flux Density Converter",
      "Heat Transfer Coefficient Converter",
    ],
  },
  {
    title: "Fluids Converters",
    converters: [
      "Flow Converter",
      "Flow - Mass Converter",
      "Flow - Molar Converter",
      "Mass Flux Density Converter",
      "Concentration - Molar Converter",
      "Concentration - Solution Converter",
      "Viscosity - Dynamic Converter",
      "Viscosity - Kinematic Converter",
      "Surface Tension Converter",
      "Permeability Converter",
    ],
  },
  {
    title: "Light Converters",
    converters: [
      "Luminance Converter",
      "Luminous Intensity Converter",
      "Illumination Converter",
      "Digital Image Resolution Converter",
      "Frequency Wavelength Converter",
    ],
  },
  {
    title: "Electricity Converters",
    converters: [
      "Charge Converter",
      "Linear Charge Density Converter",
      "Surface Charge Density Converter",
      "Volume Charge Density Converter",
      "Current Converter",
      "Linear Current Density Converter",
      "Surface Current Density Converter",
      "Electric Field Strength Converter",
      "Electric Potential Converter",
      "Electric Resistance Converter",
      "Electric Resistivity Converter",
      "Electric Conductance Converter",
      "Electric Conductivity Converter",
      "Electrostatic Capacitance",
      "Inductance Converter",
    ],
  },
  {
    title: "Magnetism Converters",
    converters: [
      "Magnetomotive Force Converter",
      "Magnetic Field Strength Converter",
      "Magnetic Flux Converter",
      "Magnetic Flux Density Converter",
    ],
  },
  {
    title: "Radiology Converters",
    converters: [
      "Radiation Converter",
      "Radiation-Activity Converter",
      "Radiation-Exposure Converter",
      "Radiation-Absorbed Dose Converter",
    ],
  },
  {
    title: "Other Converters",
    converters: [
      "Prefixes Converter",
      "Data Transfer Converter",
      "Sound Converter",
      "Typography Converter",
      "Volume - Lumber Converter",
    ],
  },
  {
    title: "Common Unit Systems",
    converters: [],
  },
]

const Sidebar = ({ activeCategory, onCategoryChange }) => {
  // Map converter names to their category keys
  const getConverterCategory = (converterName) => {
    const name = converterName.replace(" Converter", "")

    // Handle special cases
    if (name === "Weight and Mass") return "Weight"
    if (name.includes("Volume - Dry")) return "Volume Dry"
    if (name.includes("Fuel Efficiency")) return "Fuel Consumption"

    // Try to find a direct match
    const directMatch = Object.keys(converterCategories).find((cat) => cat.toLowerCase() === name.toLowerCase())

    if (directMatch) return directMatch

    // Default to the first word
    return name.split(" ")[0]
  }

  return (
    <div className="sidebar">
      <div className="sidebar-card">
        {converterCategories.map((category, index) => (
          <div key={index} className="sidebar-category">
            <div className={`sidebar-category-title ${category.active ? "active" : ""}`}>{category.title}</div>
            {category.converters && (
              <div className="sidebar-converters">
                {category.converters.map((converter, idx) => (
                  <div
                    key={idx}
                    className="sidebar-converter"
                    onClick={() => {
                      const categoryKey = getConverterCategory(converter)
                      if (categoryKey && onCategoryChange) {
                        onCategoryChange(categoryKey)
                      }
                    }}
                  >
                    {converter}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
