import React from 'react'

export  function Moon(children: React.ReactNode) {
  return (
  <div className="absolute w-full h-full bg-gradient-to-r from-[#0b1a2b] to-[#3a6291] opacity-0">
			{children}
		</div>
  )
}

export  function Sun(children: React.ReactNode) {
  return (
  <div className="absolute w-full h-full bg-gradient-to-br from-[#FFDB9E] to-[#FDF3DC] opacity-100">
			{children}
		</div>
  )
}
