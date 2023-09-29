import React from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <h3 className="mt-8 text-align">Page Headings</h3>
    </div>
  )
}