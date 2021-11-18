
import './ten.css'
import fence from './fencegroup.png'
import aomsin from './aomsin.png'
import gift from './gift.png'
import fah from './fah.png'
import bom from './bom.png'
import boat from './boat.png'
import toey from './toey.png'
import Profile from './Profile'



const pageTen2 = () => {
    return (
        <div
            id="member"
            style={{
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#A5DAE2",
                justifyContent: "space-between",
            }}
        >
            <div data-aos="fade-up" data-aos-duration="3000">
                <h1> Member </h1>
            </div>
            <div id="gridthing" style={{ display: "grid", width: "97vw" }}>
                <Profile
                    name="AOMSIN"
                    image={aomsin}
                    role="WEB DESIGN"
                    aos="fade-up"
                    link="https://www.instagram.com/chatzsin/"
                />
                <Profile
                    name="GIFT"
                    image={gift}
                    role="WEB DESIGN"
                    aos="fade-down"
                    link="https://www.instagram.com/cchabarr/"
                />
                <Profile
                    name="FAH"
                    image={fah}
                    aos="fade-up"
                    role="FRONT END"
                    link="https://www.instagram.com/_fxaxhx/"
                />
                <Profile
                    name="BOM"
                    image={bom}
                    aos="fade-down"
                    role="FRONT END"
                    link="https://www.instagram.com/balalombie_/"
                />
                <Profile
                    name="BOAT"
                    image={boat}
                    aos="fade-up"
                    role="FRONT END"
                    link="https://www.instagram.com/uuuuuu_ou/"
                />
                <Profile
                    name="TOEY"
                    image={toey}
                    aos="fade-down"
                    role="Infrastructure"
                    link="https://www.instagram.com/nakatnan/"
                />
            </div>
            <div
                style={{
                    width: "100vw",
                    height: "200px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <img src={fence} />
                <img src={fence} />
                <img src={fence} />
            </div>
        </div>
    );
}
export default pageTen2