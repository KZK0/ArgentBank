export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';


export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER_LOADING }); // Utilisez dispatch pour envoyer l'action

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: { token: data.token } }); // Authentification réussie
                return data.token; // Retourne le token pour être utilisé ultérieurement
            } else {
                // Erreur d'authentification
                throw new Error(data.message);
            }
        } catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: { error: error.message } }); // Erreur lors de la requête
            throw error;
        }
    };
};