import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
            {users.map(u => <User
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unFollow={props.unFollow}
                user={u}
                key={u.id}/>)
            }
            </div>
        </div>
    )
}

export default Users