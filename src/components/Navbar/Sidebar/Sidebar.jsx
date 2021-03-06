import React from "react";
import s from './Sitebar.module.css'
import Friend from "./Friend/Friend";


const Sidebar = (props) => {

        return (
            <div className={s.siteBar}>
                <div>
                    <h1>Friends</h1>
                    <div className={s.bigDiv}>
                        <div>
                            <img className={s.img}
                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCAx8Z3BkRc6lDaGZs7_Q-sSwcyl-2ObqEg&usqp=CAU'/>
                        </div>
                        <div className={s.div}>
                            {props.sidebar.map(m => <Friend name={m.name} key={m.id} id={m.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Sidebar