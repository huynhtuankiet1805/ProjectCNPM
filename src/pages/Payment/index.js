import './payment.scss'
function Payment() {
    return <div className='container wrap-info-payment'>
        <div className='row info-text'>
            <p className='col-xl-10'>Thông tin thanh toán đơn hàng</p>
            <p className='col-xl-auto'>NOBORE</p>
        </div>
        <div className='row info-content'>
            <div className='row'>
                <div className='col-xl-7 firstinfo'>
                    <p>Tên người nhận</p>
                    <input type="text" name='fullname' />
                </div>
                <div className='col-xl secondinfo'>
                    <p>Số điện thoại</p>
                    <input type="text" name='phone' />
                </div>
            </div>
            <div className='row'>
                <div className='thirdinfo'>
                    <p>Địa chỉ giao hàng</p>
                    <input type="text" name='address' />
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-8 fourthinfo'>
                    <div>
                        <p>Thêm voucher</p>
                        <select name="Chọn voucher" id="">
                            <option value="voucher0">Không</option>
                            <option value="voucher1">Voucher 1 - giảm 5%</option>
                            <option value="voucher2">Voucher 2 - giảm 10%</option>
                        </select>
                    </div>
                    <div>
                        <p>Thời gian giao đơn</p>
                        <input type="text" value="Giao ngày ..." disabled />
                        <input type="submit" value="Thay đổi" />
                    </div>
                    <div>
                        <p>Lấy dụng cụ ăn uống</p>
                        <input type="submit" name='btYes' value="Có" />
                        <input type="submit" name='btNo' value="Không" />
                    </div>
                </div>
                <div className='col-xl'>
                    <textarea name="textarea" id="" cols="35" rows="7" placeholder='Ghi chú cho tài xế, quán ăn'></textarea>
                </div>
            </div>
        </div>
        <div className='row detail-payment'>
            <div className='ord'>
                <div className='row' id='ord1'>
                    <img src={require("~/image/bundau.jpg")} alt="monan" className='col-xl-4' />
                    <div className='col-xl-6'>
                        <p className='ordname' id='ordname1'>Bún đậu mém tum</p>
                        <p className='ordamount' id='ordamount1'>Số lượng: 2</p>
                    </div>
                    <p id='price1' className="col-xl price">96.000đ</p>

                </div>
                <div className='row' id='ord2'>
                    <img src={require("~/image/bundau.jpg")} alt="monan" className='col-xl-4' />
                    <div className='col-xl-6'>
                        <p className='ordname'>Bún đậu mém tum</p>
                        <p className='ordamount'>Số lượng: 2</p>
                    </div>
                    <p id='price2' className="col-xl price">96.000đ</p>

                </div>
                <div className='row' id='ord3'>
                    <img src={require("~/image/bunmam.jpg")} alt="monan" className='col-xl-4' />
                    <div className='col-xl-6'>
                        <p className='ordname'>Pún mém</p>
                        <p className='ordamount'>Số lượng: 1</p>
                    </div>
                    <p id='price2' className="col-xl price">30.000đ</p>

                </div>
            </div>

            <div className='row detail-money'>
                <div className='col-xl-8'>
                    <p>Phí giao hàng</p>
                    <p id='txtsum'>Tổng tiền</p>
                </div>
                <div className='col-xl'>
                    <p className='fee'>18.000đ</p>
                    <p className='total'>240.000đ</p>
                </div>
            </div>

            <div className='row select-payment'>
                <div>
                    <p>Phương thức thanh toán</p>
                    <input type="submit" value="Thanh toán trực tuyến" />
                    <input type="submit" value="Thanh toán khi nhận hàng" />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='towrap'>
                <input type="submit" value="XÁC NHẬN" className='submit-payment' />
            </div>
        </div>
    </div>;
}

export default Payment;