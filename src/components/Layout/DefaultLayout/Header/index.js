import Logo from "~/image/logo";
import Giohang from "~/image/giohang";
function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <img src={Logo.image} alt="Logo web" class="Logo" id='mainLogo' />
            <div id="mainName">
                <p id="textName">NOBORE</p>
            </div>

            <div id='Place'>
                <select>
                    <option value="">TP. HCM</option>
                    <option value="">Hà Nội</option>
                    <option value="">Đà Nẵng</option>
                    <option value="">Cần Thơ</option>
                    <option value="">Vũng tàu</option>
                </select>
            </div>
            <div id='slt'>
                <div class="opt">
                    Đồ ăn
                </div>
                <div class="opt">
                    Bán chạy
                </div>
                <div class="opt">
                    Về chúng tôi
                </div>
                <div class="opt">
                    Hỗ trợ
                </div>
            </div>

            <div>
                <button id="btGiohang" onclick={""}>
                    <img src={Giohang.image} alt="logo giỏ hang" />
                    Giỏ hàng
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="username"
                        >
                            Username
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Thông tin cá nhân
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Quản lý đơn hàng
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Quản lý thực đơn
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Đổi mật khẩu
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </nav >
    );
}

export default Header;
