const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 19}
    ],
    newPostText: "it-Kamasutra.com",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return {

            ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        //     let stateCopy = {...state};
        //     stateCopy.posts = [...state.posts];
        //     stateCopy.posts.push(newPost);
        //     stateCopy.newPostText = {...state.newPostText}
        //     stateCopy.newPostText = '';
        //     return stateCopy;
        // }
        // case UPDATE_NEW_POST_TEXT: {
        //     let stateCopy = {...state}
        //     stateCopy.newPostText = action.newText;
        //     return stateCopy;

        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;