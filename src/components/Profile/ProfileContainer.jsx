import React from "react"
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
    debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps,
    {setUserProfile}) (WithUrlDataContainerComponent);