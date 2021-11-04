import styled from "styled-components";

const Button = styled.button`
  background-color: #ff5c5c;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

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