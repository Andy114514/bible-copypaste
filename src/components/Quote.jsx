import React from "react"

/**
 *
 * @param {string} template
 */
function extractPlaceHolder(template) {
  const placeHolderRegex = /\$\{(.*?)\|(.*?)\}/g
  const res = Array.from(template.matchAll(placeHolderRegex))
  const set = new Set()
  return res
    .map(matchRes => ({
      label: matchRes[1],
      value: matchRes[2],
    }))
    .reduce((res, curr) => {
      if (set.has(curr.label)) {
        return res
      }
      set.add(curr.label)
      return [...res, curr]
    }, [])
}

/**
 *
 * @param {string} template
 * @param {string} label
 * @param {string} value
 */
function replacePlaceHolder(template, label, value) {
  const placeHolderRegex = new RegExp(`\\$\\{${label}\\|.*?\\}`, "g")
  return template.replaceAll(placeHolderRegex, value)
}

const Quote = ({ title, template, placeholder }) => {
  const [placeHolders, setPlaceHolders] = React.useState(
    extractPlaceHolder(template)
  )

  function renderResult() {
    return placeHolders.reduce((partialTemplate, { label, value }) => {
      return replacePlaceHolder(partialTemplate, label, value)
    }, template)
  }

  const handleFieldUpdate = React.useCallback((label, newValue) => {
    setPlaceHolders(
      placeHolders.map(placeholder => {
        if (placeholder.label === label) {
          return {
            label: placeholder.label,
            value: newValue,
          }
        }
        return placeholder
      })
    )
  })

  return (
    <div className="shadow container p-5 space-y-2">
      <h3 className="font-bold">{title}</h3>
      <p>{renderResult()}</p>
      <div className="space-y-2">
        {placeHolders.map(({ label, value }) => {
          return (
            <div className="grid grid-cols-1 gap-4" key={label}>
              <label htmlFor={label}>{label}</label>
              <input
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                type="text"
                name={label}
                value={value}
                onChange={e => {
                  handleFieldUpdate(label, e.target.value)
                }}
              ></input>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Quote
