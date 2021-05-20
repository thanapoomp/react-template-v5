import React from 'react'
import Player from '../../_Demo/components/reduxDemo/Player'
import Room from '../../_Demo/components/reduxDemo/Room'
import GameConfig from '../../_Demo/components/reduxDemo/GameConfig'
import { useSelector } from 'react-redux'

function ReduxDemo() {
    const demoReducer = useSelector(({ demo }) => demo)
    return (
        <div>
            <GameConfig></GameConfig>
            <Room></Room>
            {
                demoReducer.playerList.map((item, index) => (
                    <Player key={index} name={item}></Player>
                ))
            }
        </div>
    )
}

export default ReduxDemo
