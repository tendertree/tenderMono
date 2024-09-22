---
to: <%= p %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from 'react'

interface <%= h.changeCase.pascal(name) %>Props {
	
}


export default function <%= h.changeCase.pascal(name) %> ({}: <%= h.changeCase.pascal(name) %>Props) {
  return (
    <div>
     This is  <%= h.changeCase.pascal(name) %> Component
    </div>
  )
}

