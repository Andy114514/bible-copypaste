import React from "react"
import Quote from "../components/Quote"
import bible from "../config/bible"

export default function Home() {
  return (
    <div className="container space-y-1">
      {bible.map(({ id, title, template }) => {
        return (
          <Quote
            key={id}
            snippetId={id}
            title={title}
            template={template}
          ></Quote>
        )
      })}
    </div>
  )
}
