import React from "react";

let UserStateContext = React.createContext(undefined);
let UserDispatchContext = React.createContext(undefined);

function userReducer(state, action) {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return { ...state, isAuthenticated: true };
		case "SIGN_OUT_SUCCESS":
			return { ...state, isAuthenticated: false };
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function UserProvider({ children }) {
	let [state, dispatch] = React.useReducer(userReducer, {
		isAuthenticated: !!localStorage.getItem("id_token"),
	});

	return (
		<UserStateContext.Provider value={state}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserStateContext.Provider>
	);
}

function useUserState() {
	let context = React.useContext(UserStateContext);

	if (context === undefined) {
		throw new Error("useUserState must be used within a UserProvider");
	}

	return context;
}

function useUserDispatch() {
	let context = React.useContext(UserDispatchContext);

	if (context === undefined) {
		throw new Error("useUserDispatch must be used within a UserProvider");
	}

	return context;
}

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
	setError(false);
	setIsLoading(true);

	if (!!login && !!password) {
		setTimeout(() => {
			localStorage.setItem('id_token', 1)
			setError(null)
			setIsLoading(false)
			dispatch({ type: 'LOGIN_SUCCESS' })

			history.push('/app/dashboard')
		}, 2000);
	} else {
		dispatch({ type: "LOGIN_FAILURE" });
		setError(true);
		setIsLoading(false);
	}
}

function signOut(dispatch, history) {
	localStorage.removeItem("id_token");
	dispatch({ type: "SIGN_OUT_SUCCESS" });
	history.push("/login");
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };