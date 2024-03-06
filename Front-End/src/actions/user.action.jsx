export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';

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
