export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';
export const UPDATE_USERNAME_SUCCESS = 'UPDATE_USERNAME_SUCCESS';
export const UPDATE_USERNAME_FAILURE = 'UPDATE_USERNAME_FAILURE';

export const fetchUserInfo = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch info');
            }

            const userInfo = await response.json();
            dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: userInfo });
        } catch (error) {
            console.error('Error fetching user info:', error.message);
            dispatch({ type: FETCH_USER_INFO_FAILURE, payload: error.message });
        }
    };
};


export const updateUserName = (token, newUsername) => {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ userName: newUsername })
            });

            if (!response.ok) {
                throw new Error('Failed to update username');
            }

            dispatch(fetchUserInfo(token)); // Fetch updated user info after username update
            dispatch({ type: UPDATE_USERNAME_SUCCESS, payload: newUsername }); // Dispatch success action
        } catch (error) {
            console.error('Error updating username:', error);
            dispatch({ type: UPDATE_USERNAME_FAILURE, payload: error.message }); // Dispatch failure action
        }
    };
};