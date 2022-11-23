import Logo from "~/image/logo";

function Footer() {
    return <div>
        <div id="company">
            <h5>Công ty</h5>
            <a href="#"> Giới thiệu</a> <br />
            <a href="#">Trung tâm trợ giúp</a> <br />
            <a href="#">Liên hệ</a> <br />
            <a href="#">Quy chế</a> <br />
            <a href="#">Điều khoản sử dụng</a> <br />
            <a href="#"> Giải quyết khiếu nại</a> <br />
            <a href="#">Đăng ký quán</a>
        </div>
        <div id="footlogo">
            <div>
                <h5>Hệ thống website đặt món ăn NOBORE</h5>
            </div>
            <div><img src={Logo.image} alt="footlogo" id="logo" /></div>
        </div>
        <div id="address">
            <h5>Địa chỉ công ty</h5>
            <p>
                Công ty cổ phần NOBORE <br />
                Lầu AF, tòa nhà Jabes1, <br />
                số 222 đường Công Quỳnh, phường Phạm Ngũ Lão, Quận 1, TP. HCM <br />
                Giấy CN ĐKDN số: 0311828035 <br />
                do Sở Kế hoạch đầu tư TP. HCM cấp ngày 14/11/2022. <br />
                Email: <a href="#">support@nobore.vn</a>
            </p>

        </div>
    </div>;
}

export default Footer;
