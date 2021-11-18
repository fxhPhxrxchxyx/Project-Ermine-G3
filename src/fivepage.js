import styled from 'styled-components';
import { Page } from './firstpage';
import bg5 from './bg5.jpg';
import Wood5 from './wood5.png'
import './five.css'

const Woodfive = styled.div`
 background-image: ${props => `url(${props.wood})`};
 background-repeat: no-repeat;
 width: 486px;
 height: 155px;
 background-size: contain;
 z-index: +1;
 position: absolute;
 top: 33%;
 right: 23.5%;
 
`
function Pagefive() {
    return (
        <div>
            <Page bg={bg5} height="120vh">

                <Woodfive wood={Wood5} data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <h1 id="s5">But shortly after this a wolf actually did came out from the forest and began to worry the sheep</h1>
                </Woodfive>
            </Page>

        </div>

    )


}
export default Pagefive