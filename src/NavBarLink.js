import React, { Component, useEffect, useState } from 'react';
const NavBarLink = ({ href, childrenavigator, isactive, children }) => {
    const [ishover, setishover] = useState(isactive || false);
    const [isnow, setisnow] = useState(false)
    const listenToPopstate = () => {
        const winPath = window.location.hash;
        if (winPath === href) {
            setisnow(true)
        } else {
            setisnow(false)
        }
    };
    useEffect(() => {
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);

    return (
        <li style={{ padding: "14px 16px" }} onMouseEnter={isactive ? () => { } : () => setishover(true)} onMouseLeave={isactive ? () => { } : () => setishover(false)} >
            <a className={isnow ? 'bg-isonselected' : ishover ? 'bg-active' : 'bg'} href={href}>{children}</a>
        </li>
    )
}

export default NavBarLink