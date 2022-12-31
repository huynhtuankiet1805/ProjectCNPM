import './order.scss'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerImg from './../../image/banner_img.jpg'
import Category from '~/components/Category/category';

const Order = () => {
    return (
        <React.Fragment>

    <section>
            <Container>
            <Row>
            <Col lg = '6' md = '6'>
                        <div className = "banner_img">
                            <img src = {BannerImg} alt ="bannerimg">
                            </img>
                        </div>
                    </Col>
                    <Col lg = '6' md = '6'>
                        <div className = "banner_content">
                            <h5>Đói bụng à? Để <span>NOBORE</span> lo nha!</h5>
                            <h1><strong>Yêu mình đừng để mình đói💗</strong></h1>
                            <p>Yêu bản thân đơn giản là ăn ngon mỗi ngày!</p>   
                            <p>Nhiều món thơm ngon mời bạn ăn nha</p>   
                            <p>Tôi đây không chờ bạn nữa... Giờ tôi lên <span>NOBORE</span> order món ngon liền!</p>                
                        </div>
                        <div className = "banner_button">
                            <Button className = "btn btn-light d-flex align-items-center justify-content-between text-white">Order cùng tôi 👇
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
    </section>
    <br></br>
    <section>
            <Category />
    </section>
    </React.Fragment>

    )
};

export default Order;