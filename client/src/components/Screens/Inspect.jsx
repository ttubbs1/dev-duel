import { useState } from "react"
import InspectResult from "./InspectResult"
import BigButton from "../BigButton"
import styled from "styled-components"
import { inspectUser } from "../../services/userService"

const InputBar = styled.input`
    border: 2px solid #333;
    border-radius: 30px;
    color: black;
    height: 50px;
    width: 290px;
    font-size: 1.3em;
    text-align: center;
`

const Center = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: center;
    padding: 50px 80px;
    margin-left: 7em;
    margin-right: 7em;
    margin-bottom: 1em;
    justify-content: center;
    align-items: center;
`

const Padding = styled.div`
    padding-bottom: 3em;
`

const Inspect = () => {
    const [username, setUsername] = useState({})
    const [searched, setSearched] = useState(false)
    const [user, setUser] = useState({})

    const handleClick = async () => {

        let searchedUser = await inspectUser(username)
        setUser(searchedUser)

        setSearched(true)

    } 

    return (
        <Center>
            <InputBar onChange={event => { 
                setUsername(event.target.value) 
                setSearched(false)
                }} />
            <Padding />
            <span onClick={handleClick}><BigButton word='Inspect'/></span>
            {searched ? <InspectResult userProps={user} /> : null}
        </Center>
    )

}

export default Inspect
