import './payment.scss'
import { setColorYes, setColorNo, setColorPay1, setColorPay2 } from './function'
function Payment() {
    return <div id='pay'>
        <p id='txt'>Thông tin thanh toán đơn hàng</p>
        <div id='info'>
            <div className='pay_textinfo'>
                Tên người nhận <input type="text" id='username' />
            </div>
            <div className='pay_textinfo'>
                Số điện thoại <input type="text" id='numberphone' />
            </div>
            <div className='pay_textinfo'>
                Địa chỉ giao hàng <input type="text" id='address' />
            </div>
            <div>
                <div className='pay_textinfo' id='frame1'>
                    Thêm voucher <select name="voucher" id="voucher">
                        <option value="">Chọn voucher</option>
                        <option value="">...</option>
                    </select>
                    <br /> <br />
                    Thời gian giao đơn <input type="text" value={"#"} id="timetoship" />
                    <input type="submit" value={"Thay đổi"} id='btChange' />
                    <br /> <br /> <br />
                    Lấy dụng cụ ăn uống
                    <input type="button" className='btChoose' id='btYes' value="Có" onClick={setColorYes} />
                    <input type="button" className='btChoose' id='btNo' value="Không" onClick={setColorNo} />
                </div>
                <div id='note'>
                    Ghi chú cho tài xế, quán ăn:
                    <textarea name="" id="txtnote" cols="60" rows="10"></textarea>
                </div>
            </div>

        </div>

        <div id='detail'>
            <div id='pic'>
                fsafsa <br />
                -------------------------------
                <br /><br /><br />
            </div>
            <div>
                <div id='price1'>
                    <div id='txtfee'>
                        Phí thanh toán
                    </div>
                    <div id='fee'>
                        18000d
                    </div>
                </div>

                <div id='price2'>
                    <div id='txttotal'>
                        Tổng tiền
                    </div>
                    <div id='totalprice'>
                        400000d
                    </div>
                </div>

            </div>
            <div id='thanhtoan'>
                Hình thức thanh toán
                <input type="button" className='btPay' id='btPay1' value="Thanh toán trực tuyến" onClick={setColorPay1} />
                <input type="button" className='btPay' id='btPay2' value="Thanh toán trực tiếp" onClick={setColorPay2} />
            </div>
        </div>

        <div id='lastframe'>
            <input type="button" id='btConfirm' value="Xác nhận" />
        </div>
    </div >;
}

export default Payment;