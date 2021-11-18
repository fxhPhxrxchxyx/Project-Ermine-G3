import styled from 'styled-components';
import { Page } from './firstpage';
import bg4 from './bg4.jpg';
import boy2 from './boy2.png';
import Wood4 from './wood4.png';
import './four.css'

const Boytwo = styled.img`
position: absolute;
top: 498%;
width: 520px;
height: 520px;
left: 90px;
animation: childHaha 5s ease-in-out 0s infinite;
transform-origin: bottom center;
`
const Woodfour = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width:423px;
 height:181px ;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 35%;
 right: 15%;
 
`


function Pagefour() {
    return (
        <div>
            <Boytwo src={boy2} />
            <Page bg={bg4} height="120vh">
                <Woodfour wood={Wood4} data-aos="zoom-in-left">
                    <h1 id="s4">A few days afterwards he tried the same trick, and again the villagers came to his help.</h1>
                </Woodfour>
            </Page>

        </div>

    )


}
export default Pagefour