import styled from 'styled-components';
import './nine.css'
import moral from './moral.png'
import boy2 from './boy2.3.png';


const Moral = styled.img`
position: absolute;
width:1084px;
height:429;
top: 50%;
left: 55%;
transform: translate(-50%,-50%);
filter: drop-shadow(1px 4px 5px black);
`
const Boytwo = styled.img`
position: absolute;
top: 47%;
width: 500px;
height: 500px;
right: 200px;

`

function Pagenine() {
    return (

        <div className="contain2" id="moral">
            <div data-aos="zoom-in">
                <Moral src={moral} />
                <Boytwo src={boy2} />
                <div className="moral">
                </div>
            </div>
        </div>

    )


}
export default Pagenine