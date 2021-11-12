import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Bad = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `

const BadUrl = () => (
	<Bad>
		<h1>Den här sidan finns inte!</h1>
		<div>
			<Link to="/"> tillbaka till startsidan</Link>.
		</div>

	</Bad>
)

export default BadUrl