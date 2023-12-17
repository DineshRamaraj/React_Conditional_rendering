import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

// React DefaultProps

Welcome.defaultProps = {
  name: 'Dinesh',
  greeting: 'Vanakkam',
}

export default Welcome
