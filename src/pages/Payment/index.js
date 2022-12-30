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
                    <input type="text" class="form-control sametext" placeholder="Họ và tên" aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>
                <div className='col-xl-5 secondinfo'>
                    <p>Số điện thoại</p>
                    <input type="text" class="form-control sametext" placeholder="Số điện thoại" aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>
            </div>
            <div className='row'>
                <div className='thirdinfo'>
                    <p>Địa chỉ giao hàng</p>
                    <input type="text" class="form-control sametext" placeholder="Địa chỉ giao hàng" aria-label="Username" aria-describedby="addon-wrapping"></input>
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
                        <input type="submit" name='btYes' value="Có" id='btYes' />
                        <input type="submit" name='btNo' value="Không" id='btNo' />
                    </div>
                </div>
                <div className='col-xl'>
                    <textarea name="textarea" id="" cols="35" rows="7" placeholder='Ghi chú cho tài xế, quán ăn'></textarea>
                </div>
            </div>
        </div>
        <div className='row detail-payment'>
            <div className='ord'>
                <div className='ord-detail' id='ord1'>
                    <img src={require("~/image/bundau.jpg")} alt="monan" />
                    <div className="ord-detail-wrap">
                        <div>
                            <p className='ordname' id='ordname1'>Bún đậu mém tum</p>
                            <p className='ordamount' id='ordamount1'>Số lượng: 2</p>
                        </div>
                        <p id='price1' className="price">96.000đ</p>
                    </div>

                </div>
                <div className='ord-detail' id='ord2'>
                    <img src={require("~/image/bundau.jpg")} alt="monan" />
                    <div className="ord-detail-wrap">
                        <div>
                            <p className='ordname' id='ordname2'>Bún đậu mém tum</p>
                            <p className='ordamount' id='ordamount2'>Số lượng: 2</p>
                        </div>
                        <p id='price2' className="price">96.000đ</p>
                    </div>

                </div>
                <div className='ord-detail' id='ord3'>
                    <img src={require("~/image/bunmam.jpg")} alt="monan" />
                    <div className="ord-detail-wrap">
                        <div>
                            <p className='ordname' id='ordname3'>Pún mém mém</p>
                            <p className='ordamount' id='ordamount3'>Số lượng: 1</p>
                        </div>
                        <p id='price3' className="price">30.000đ</p>
                    </div>

                </div>
            </div>

            <div class="text-success">
                <hr />
            </div>

            <div className='row detail-money'>
                <div className='col-xl-10 col-md-7 col-7'>
                    <p>Phí giao hàng</p>
                    <p id='txtsum'>Tổng tiền</p>
                </div>
                <div className='col-xl-1 col-md-5 col-5'>
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