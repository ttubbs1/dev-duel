import { useState } from "react"
import styled from "styled-components"
import InspectResult from "./InspectResult"

const Card = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: center;
    padding: 50px 80px;
    margin-left: 7em;
    margin-right: 7em;
    margin-bottom: 1em;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
` 

const CatagoryWinner = styled.div`
    border: 2px solid #333;
    border-radius: 30px;
    text-align: center;
    background-color: rgb(48, 160, 48);
    padding-left: 10px;
    padding-right: 10px;
    text-color: white;
`

const Winner = styled.div`
    border: 2px solid #333;
    border-radius: 30px;
    padding-top: 10px;
    width: 200px;
    height: 50px;
    text-align: center;
    background-color: rgb(48, 160, 48);
    text-color: white;
`
const Padding = styled.div`
    padding-top 2em;
`

const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const DuelResult = ({userProps1, userProps2}) => {
    const [user1, updateUser1] = useState(userProps1)
    const [user2, updateUser2] = useState(userProps2)

    const compareSize = (size1, size2) => size1 === size2 ? catagoryWinner(0) : size1 > size2 ? catagoryWinner(1) : catagoryWinner(2)
    const catagoryWinner = (number) => number === 0 ? "No one" : number === 1 ? user1.username : user2.username

    const titlesWinner = compareSize(user1.titles.length, user2.titles.length)
    const reposWinner = compareSize(user1['public-repos'], user2['public-repos'])
    const totalStarsWinner = compareSize(user1['total-stars'], user2['total-stars'])
    const mostStarsWinner = compareSize(user1['highest-starred'], user2['highest-starred'])
    const perfectReposWinner = compareSize(user1['perfect-repos'], user2['perfect-repos'])
    const followersWinner = compareSize(user1.followers, user2.followers)
    const followingWinner = compareSize(user1.following, user2.following)

    const catagoryWinners = [titlesWinner, reposWinner, totalStarsWinner, mostStarsWinner, perfectReposWinner, followersWinner, followingWinner]

    const count = (array, user) => array.filter(item => item == user).length
    const winner = count(catagoryWinners, user1.username) === count(catagoryWinners, user2.username) 
        ? "No one" : count(catagoryWinners, user1.username) > count(catagoryWinners, user2.username) ? user1.username : user2.username

    return (
        <Card>
            <Row>
                <InspectResult userProps={user1} />
                    <Column>
                        <Padding />
                        <CatagoryWinner>{titlesWinner} has more titles</CatagoryWinner>
                        <CatagoryWinner>{reposWinner} has more repos</CatagoryWinner>
                        <CatagoryWinner>{totalStarsWinner} has more stars</CatagoryWinner>
                        <CatagoryWinner>{mostStarsWinner} has the most stars on a single repo</CatagoryWinner>
                        <CatagoryWinner>{perfectReposWinner} has more perfect repos</CatagoryWinner>
                        <CatagoryWinner>{followersWinner} has more followers</CatagoryWinner>
                        <CatagoryWinner>{followingWinner} has more following</CatagoryWinner>
                        <Padding />
                        <Winner>{winner} won overall</Winner>
                    </Column>
                <InspectResult userProps={user2} />
            </Row>
        </Card>
    )
}

export default DuelResult
