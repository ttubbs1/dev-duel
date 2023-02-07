import { Link, Route } from 'react-router-dom'
import Inspect from './Inspect'
import Duel from './Duel'
import BigButton from '../BigButton'
import { Fragment } from 'react'
import styled from "styled-components";

const Center = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: center;
    padding: 50px 80px;
    margin-left: 7em;
    margin-right: 7em;
    margin-bottom: 1em;
`

const Heading = styled.h1`
    font-size: 5em;
    padding-bottom: 1em;
`

const Padding = styled.div`
    padding-left: 4em;
    padding-right: 4em;
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterBar = styled.div`
    border: 2px solid #333;
    width: 1px
    height: 100px;
    padding-top: 100px;
`

// add drop shadow

const Home = () => {
    return (
        <Center>
            <Heading>Welcome To Dev-Duel</Heading>
            <Route path='/' render={() => (
                    <nav>
                        <Row>
                            <Link to='/inspect'><BigButton word='Inspect' /></Link>
                            <Padding><CenterBar /></Padding>
                            <Link to='/duel'><BigButton word='Duel' /></Link>
                        </Row>
                    </nav>
            )
            } />
        </Center>
    )
}

export default Home
