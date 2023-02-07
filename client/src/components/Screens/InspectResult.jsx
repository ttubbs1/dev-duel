import { useEffect, useState } from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex; 
    flex-direction: column;
    border: 2px solid #333;
    border-radius: 30px;
    text-align: center;
    padding: 50px 80px;
    margin-left: 7em;
    margin-right: 7em;
    margin-bottom: 1em;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
` 

const NoBulletList = styled.ul`
    list-style-type: none;
    text-align: left;
    padding: 0px 50px;
`

const ProfilePic = styled.img`
    width: 150px; 
    height: 150px; 
`

const InspectResult = ({ userProps }) => {
    const [user, updateUser] = useState(userProps)

    if (user.message) {
        return (
            <Card>
                {user.message}
            </Card>
        )
    }

    return (
        <Card>
            <NoBulletList>
                <div>
                    <ProfilePic src={user['avatar_url']} alt="Profile Pic" />
                    <li>Username: {user.username}</li>
                    <li>Name: {user.name}</li>
                    <li>Location: {user.location}</li>
                    <li>Bio: {user.bio}</li>
                    <li>Titles: {user.titles}</li>
                    <li>Favorite Language: {user['favorite-language']}</li>
                    <li>Repos: {user['public-repos']}</li>
                    <li>Total Stars: {user['total-stars']}</li>
                    <li>Most Stars: {user['highest-starred']}</li>
                    <li>Perfect Repos: {user['perfect-repos']}</li>
                    <li>Followers: {user.followers}</li>
                    <li>Following: {user.following}</li>
                </div>
            </NoBulletList>
        </Card>
    )
}

export default InspectResult
