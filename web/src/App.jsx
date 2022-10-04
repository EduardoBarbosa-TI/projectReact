const Title = (props) => (
  <h1>{props.children}</h1>
)


export function App(){
  return (
    <div className="app">
      <Title>Olá Mundo</Title>
    </div>
  )
    
}

