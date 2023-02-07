import { useEffect, useState } from "react"
import BigButton from "../BigButton"
import styled from "styled-components"
import DuelResult from "./DuelResult"
import { duelUsers } from "../../services/userService"
import InspectResult from "./InspectResult"

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
    padding-right: 20em;
`

const Row = styled.div`
    display: flex;
    padding-bottom: 3em;
`

const Duel = () => {
    const [username1, setUsername1] = useState({})
    const [username2, setUsername2] = useState({})
    const [searched, setSearched] = useState(false)
    const [user1, setUser1] = useState({})
    const [user2, setUser2] = useState({})

    const handleClick = async () => {

        if ((Object.keys(username1).length) != 0 && (Object.keys(username2).length != 0)) {
            let searchedUsers = await duelUsers(username1, username2)
            setUser1(searchedUsers[0])
            setUser2(searchedUsers[1])
    
            setSearched(true)
        }    

    } 

    return (
        <Center>
            <Row>
                <InputBar onChange={event => { 
                    setUsername1(event.target.value) 
                    setSearched(false)
                    }} />
                <Padding />
                <InputBar onChange={event => { 
                    setUsername2(event.target.value) 
                    setSearched(false)
                    }} />
            </Row>
            <span onClick={handleClick}><BigButton word='Duel'/></span>
            {searched ? 
                <div>
                    <DuelResult userProps1={user1} userProps2={user2} />
                </div> : <div>Must enter a user in each field</div>}
        </Center>
    )

}

export default Duel
