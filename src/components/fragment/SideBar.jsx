import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined} from "@material-ui/icons";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (

        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"My profile"}/>
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
                <SideBarOptions className={"lib-sub"} Icon={AccountCircleOutlinedIcon} href={"/home/connexion"}  title={"Connexion"}/>
                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>MY PLAYLIST</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/instrumental"}  title={"Instrumental"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/rap"}  title={"Rap"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/pop"}  title={"Pop"}/>
            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;