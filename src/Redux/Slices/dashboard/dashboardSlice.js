import { createSlice } from '@reduxjs/toolkit'
import {
    VideoCover,
    Dribble,
    Blogger,
    Discord,
    Youtube,
    LinkedIn,
    Twitter,
    Analytics1
} from "src/assets";
const initialState = {
    user: {name:"Stephanie mark" ,link:"", social:[], available:[
    {
        name:"Dribble",
        img:`${Dribble}`,
        bg:"#ea4c89",
        id:0
    },
    {
        name:"Blogger",
        img:`${Blogger}`,
        bg:"#fc4f08",
        id:1
    },
    {
        name:"Discord",
        img:`${Discord}`,
        bg:"#7289da",
        id:2
    },
    {
        name:"Youtube",
        img:`${Youtube}`,
        bg:"#ff0000",
        id:3
    },
    {
        name:"LinkedIn",
        img:`${LinkedIn}`,
        bg:"#0e76a8",
        id:4
    },
    {
        name:"Twitter",
        img:`${Twitter}`,
        bg:"#00acee",
        id:5
    }] },
}

export const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,
    reducers: {
        setUser: (state , Action) => {
            state.user = Action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setUser } = dashboardSlice.actions

export default dashboardSlice.reducer