import React from 'react'
import Card from './Component/Card'

const App = () => {

  return (
    <div>
      <Card user="Spiderman" img="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww"
      tech="UI/UX designer" data="55$/h" tool="UI" tools="UX" more="Photoshop"
      />
      <Card user="Ironman" img="https://images.unsplash.com/photo-1657558045738-21507cf53606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXJvbm1hbnxlbnwwfHwwfHx8MA%3D%3D"
        tech="Mern Stack" data="60$/h" tool="Express" tools="Node" more="react"
      />
      <Card user="Thor" img="https://media.istockphoto.com/id/1147508542/photo/man-in-cosplaying-thor-isolated-on-white-studio-background.jpg?s=1024x1024&w=is&k=20&c=-glvYxELnM2SIfe2A6FmwltVfzpV-V9ApQpnbixH0eI="
        tech="Java Full Stack" data="50$/h" tool="Springboot" tools="DSA" more="advanced"
      />
    </div>
  )
}

export default App
