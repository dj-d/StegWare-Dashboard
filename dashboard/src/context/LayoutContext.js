import React, { useReducer, createContext, useContext } from "react";

const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

let LayoutStateContext = createContext();
let LayoutDispatchContext = createContext();

function layoutReducer(state, action) {
    if (action.type === TOGGLE_SIDEBAR) {
        return { ...state, isSidebarOpened: !state.isSidebarOpened };
    } else {
        throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function LayoutProvider({ children }) {
    const [state, dispatch] = useReducer(layoutReducer, {
        isSidebarOpened: true,
    });

    return (
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>
                {children}
            </LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
    );
}

function useLayoutState() {
    let context = useContext(LayoutStateContext);

    if (context === undefined) {
        throw new Error("useLayoutState must be used within a LayoutProvider");
    }

    return context;
}

function useLayoutDispatch() {
    let context = useContext(LayoutDispatchContext);

    if (context === undefined) {
        throw new Error("useLayoutDispatch must be used within a LayoutProvider");
    }

    return context;
}

function toggleSidebar(dispatch) {
    dispatch({
        type: TOGGLE_SIDEBAR
    });
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };
