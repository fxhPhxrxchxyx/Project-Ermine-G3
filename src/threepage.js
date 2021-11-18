import styled from 'styled-components';
import { Page } from './firstpage';
import bg3 from './bg3.jpg';
import boy1 from './boy1.png';
import boy2 from './boy2.png';
import boy3 from './boy3.png';
import girl1 from './girl1.png';
import Wood3 from './wood3.png';
import './threepage.css'

const Boytwo = styled.img`
position: absolute;
top: 350%;
width: 520px;
height: 498px;
left: 650px;
animation: childHaha 5s ease-in-out 0s infinite;
transform-origin: bottom center;
`
const Girlone = styled.img`
position: absolute;
top: 326%;
width: 500px;
height: 500px;
left: 58px;
`
const Boythree = styled.img`
position: absolute;
top: 357%;
width: 406px;
height: 406px;
left: 220px;
`
const Boyone = styled.img`
position: absolute;
top: 348%;
width: 493px;
height: 493px;
`
const Woodthree = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width: 496px;
 height: 213px;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 65%;
 right: 65%;
 
`


function Pagethree() {
    return (
        <div>
            <Girlone src={girl1} />
            <Boythree src={boy3} />
            <Boyone src={boy1} />
            <Boytwo src={boy2} />



            <Page bg={bg3} height="140vh">
                <Woodthree wood={Wood3} data-aos="zoom-in-right">
                    <h1 id="s3">And the villagers came out to meet him, and some of them stopped with him for a consideration time. This pleased the boy so much</h1>
                </Woodthree>
            </Page>

        </div>

    )


}
export default Pagethree