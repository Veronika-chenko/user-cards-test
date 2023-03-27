import styled from "styled-components";

import Logo from "../../img/logo.svg";
import MessagesBg from "../../img/messages.svg";

export const UserCard = styled.li`
    position: relative;
    width: 380px;
    padding: 214px 32px 32px;
    
    background: url(${Logo}), url(${MessagesBg}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-repeat: no-repeat;
    background-position: top 20px left 20px, top 28px center, top 0 left 0;
    border-radius: 20px;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    
    &::before {
        position: absolute;
        top: 214px;
        left: 0;

        display: block;
        width: 100%;
        height: 8px;

        content: "";
        background-color: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
            inset 0px -1.71846px 3.43693px #AE7BE3, 
            inset 0px 3.43693px 2.5777px #FBF8FF;
    }
`

export const AvatarWrap = styled.div`
    position: absolute;
    top: 178px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    background-color: #EBD8FF;
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
        inset 0px -2.19582px 4.39163px #AE7BE3, 
        inset 0px 4.39163px 3.29372px #FBF8FF;
`

export const Avatar = styled.img`
    width: 62px;
    height: 62px;

    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
        0px -2.19582px 4.39163px #AE7BE3, 
        0px 4.39163px 3.29372px #FBF8FF;
        
`

export const StatList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    margin-top: 70px;
`

export const StatItem = styled.li`
    font-size: 20px;
    font-weight: 500;
    line-height: calc(24px / 20px);
    text-transform: uppercase;

    color: #EBD8FF;
`

export const FollowButton = styled.button`
    display: block;
    width: 196px;
    height: 50px;

    margin: 26px auto 0;
    padding: 14px 28px;
    cursor: pointer;

    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;

    color: #373737;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    background-color: ${p => p.isFollowing ? "#5CD3A8" : "#EBD8FF"};
    
    transition: background-color 250ms linear;

    &:hover {
        background-color: #5CD3A8;
    }
`