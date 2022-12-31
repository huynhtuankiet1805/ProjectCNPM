import './order.scss'
import { Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerImg from './../../image/banner_img.jpg'

const Order = () => {
    return (
    <section>
            <Container>
            <Col lg = '6' md = '6'>
                        <div className = "banner_img">
                            <img src = {BannerImg} alt ="bannerimg">
                                
                            </img>

                        </div>
                    </Col>


                <Row>
                    <Col lg = '6' md = '6'>
                        <div className = "banner_content">
                            <h1 className = "Bu">Bu</h1>
                        </div>
                    </Col>
                </Row>
            </Container>

    </section>
    );
}

export default Order;