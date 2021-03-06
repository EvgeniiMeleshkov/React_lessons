import React from "react"
import {addNewLike, addPostCreator, deletePost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



class MyPostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    addNewPostText = (values) => {
        this.props.addPost(values.newPostBody)
    }

    render() {
        return (
           <MyPosts
                    newPostText={this.props.newPostText}
                    posts={this.props.posts}
                    addNewPostText={this.addNewPostText}
                    delete={this.props.delete}
                    like={this.props.like}
           />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostCreator(newPostBody));
        },
        delete: (postId) => {
            dispatch(deletePost(postId))
        },
        like: (postId) => {
            dispatch(addNewLike(postId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)