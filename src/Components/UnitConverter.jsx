"use client"

import { useState } from "react"
import { conversionData } from "../utils/conversionData"
import { convertUnit } from "../utils/conversionLogic"
import Sidebar from "./Sidebar"
import CommonConversions from "./CommonConversions"

const UnitConverter = () => {
  const [activeCategory, setActiveCategory] = useState("Length")
  const [fromValue, setFromValue] = useState("")
  const [toValue, setToValue] = useState("")
  const [fromUnit, setFromUnit] = useState("")
  const [toUnit, setToUnit] = useState("")
  const [fromUnitSearch, setFromUnitSearch] = useState("")
  const [toUnitSearch, setToUnitSearch] = useState("")

  const handleFromValueChange = (value) => {
    setFromValue(value)
    if (value && fromUnit && toUnit) {
      const result = convertUnit(Number.parseFloat(value), fromUnit, toUnit, activeCategory)
      setToValue(result.toString())
    } else {
      setToValue("")
    }
  }

  const handleToValueChange = (value) => {
    setToValue(value)
    if (value && fromUnit && toUnit) {
      const result = convertUnit(Number.parseFloat(value), toUnit, fromUnit, activeCategory)
      setFromValue(result.toString())
    } else {
      setFromValue("")
    }
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setFromUnit("")
    setToUnit("")
    setFromValue("")
    setToValue("")
  }

  // Main categories to show as tabs
  const mainCategories = [
    "Length",
    "Weight",
    "Volume",
    "Temperature",
    "Area",
    "Pressure",
    "Energy",
    "Time",
    "Speed",
    "Angle",
  ]

  // All categories for the dropdown
  const allCategories = Object.keys(conversionData)

  return (
    <div>
      {/* Header */}
      <div className="header">
        <h1>
          Unit<span className="highlight">Converters</span>.net
        </h1>
      </div>

      <div className="main-container">
        {/* Main Content */}
        <div className="content">
          {/* Unit Converter Express Version */}
          <div className="converter-section">
            <div className="converter-title">
              <svg className="calculator-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <h2>Unit Converter Express Version</h2>
            </div>

            {/* Category Tabs - Show main categories as tabs */}
            <div className="category-tabs">
              {mainCategories.map((category) => (
                <button
                  key={category}
                  className={`tab-button ${activeCategory === category ? "active" : ""}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}

              {/* Dropdown for other categories */}
              <select
                className="select-field"
                value={
                  allCategories.includes(activeCategory) && !mainCategories.includes(activeCategory)
                    ? activeCategory
                    : ""
                }
                onChange={(e) => e.target.value && handleCategoryChange(e.target.value)}
                style={{ minWidth: "180px" }}
              >
                <option value="">More Converters...</option>
                {allCategories
                  .filter((cat) => !mainCategories.includes(cat))
                  .sort()
                  .map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            {/* Conversion Interface */}
            <div className="conversion-card">
              <div className="conversion-grid">
                {/* From Section */}
                <div className="input-group">
                  <label className="input-label">From:</label>
                  <input
                    type="number"
                    value={fromValue}
                    onChange={(e) => handleFromValueChange(e.target.value)}
                    placeholder="Enter value"
                    className="input-field"
                  />
                  <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="select-field">
                    <option value="">Select unit</option>
                    {conversionData[activeCategory]?.units.map((unit) => (
                      <option key={unit.name} value={unit.name}>
                        {unit.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* To Section */}
                <div className="input-group">
                  <label className="input-label">To:</label>
                  <input
                    type="number"
                    value={toValue}
                    onChange={(e) => handleToValueChange(e.target.value)}
                    placeholder="Result"
                    className="input-field"
                  />
                  <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="select-field">
                    <option value="">Select unit</option>
                    {conversionData[activeCategory]?.units.map((unit) => (
                      <option key={unit.name} value={unit.name}>
                        {unit.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Find Units to Convert */}
          <div className="find-units-card">
            <h3 className="find-units-title">Find the Units to Convert</h3>
            <div className="find-units-grid">
              <div className="input-group">
                <label className="input-label">From Unit:</label>
                <input
                  value={fromUnitSearch}
                  onChange={(e) => setFromUnitSearch(e.target.value)}
                  placeholder="e.g. kilogram"
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="input-label">To Unit:</label>
                <input
                  value={toUnitSearch}
                  onChange={(e) => setToUnitSearch(e.target.value)}
                  placeholder="e.g. lbs"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Common Conversions */}
          <CommonConversions />
        </div>

        {/* Sidebar */}
        <Sidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </div>
    </div>
  )
}

export default UnitConverter
