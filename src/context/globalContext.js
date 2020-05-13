import React, {createContext, useReducer, useContext} from 'react'
//Define Context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//reducer
const globalReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_THEME": {
            return {
                ...state,
                currentTheme: action.theme,
            }
        }
        case "CURSOR_TYPE": {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }
        default : {
            throw new Error(`unhandled action type: ${action.type}`)
        }
    }
}

//Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: window.localStorage.getItem("theme") === null ? "dark" : window.localStorage.getItem("theme"),
        cursorType: false, 
        cursorStyles: ["pointer", "hovered", "nav-open"]
    })
    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

//Custom hooks for state and dispatch

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)