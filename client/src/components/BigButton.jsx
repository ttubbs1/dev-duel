import styled from "styled-components";

const Button = styled.button`
    border: 2px solid #333;
    border-radius: 30px;
    color: black;
    height: 100px;
    width: 270px;
    font-size: 2em;
`

const BigButton = ({word}) => (
    <Button>{word}</Button>
)

export default BigButton
