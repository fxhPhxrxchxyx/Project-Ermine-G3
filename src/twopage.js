import styled from 'styled-components';
import { Page } from './firstpage';
import page2 from './page2.jpg';
import boy1 from './boy1.png';
import boy3 from './boy3.2.png';
import boy2 from './boy2.1.png';
import girl1 from './girl2.1.png';
import Wood2 from './wood2.png';
import Wolfeat1 from './wolfeat1.png';
import Table1 from './table1.png';
import './twopage.css'


const Girlone = styled.img`
position: absolute;
top: 262%;
left: 530px;
width: 329px;
height: 329px;
`
const Boytwo = styled.img`
position: absolute;
top: 253%;
width: 406px;
height: 406px;
left: 900px;
`
const Boyone = styled.img`
position: absolute;
top: 258%;
width: 383px;
height: 418px;
left: 354px;
`
const Boythree = styled.img`
position: absolute;
top: 260%;
width: 305px;
height: 305px;
left: 630px;
`
const Woodtwo = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width: 424px;
 height: 135px;

 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 17%;
 right: 50%;
`
const Wolfeatone = styled.img`
position: absolute;
top: 225%;
width: 479px;
height: 433.58px;
left: 775px;
`
const Tableone = styled.img`
position: absolute;
top: 225%;
width: 345.09px;
height: 345.09px;
left: 820px;

`

function Pagetwo() {
  return (
    <div>
      <Boyone src={boy1} />
      <Boytwo src={boy2} />
      <Boythree src={boy3} />
      <Girlone src={girl1} />
      <Tableone src={Table1} data-aos="fade-up-left" />
      <Wolfeatone src={Wolfeat1} data-aos="fade-up-left" />

      <Page bg={page2} height="130vh" >

        <Woodtwo wood={Wood2} data-aos="fade-down-left">
          <h1 id="s2">He rushed down towards the village calling out Wolf, Wolf</h1>
        </Woodtwo>

      </Page>
    </div>
  );
}

export default Pagetwo