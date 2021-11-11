import { Button } from '../../shared/Button'

const Error = () => (
  <div>
    <p>
      Tyvärr verkar det vara något fel med sidan.
      Vänligen ladda om sidan och försök igen.
    </p>
    <Button onClick={() => window.location.reload()}>Ladda om sidan!</Button>
  </div>
);

export default Error;