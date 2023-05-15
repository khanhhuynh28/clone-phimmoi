import './footer.scss';
function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-item'>
                <div className="fcmpbox">
                    <div className="primary">
                        <div className="fotlogo">
                            <div className="logo">
                                <img src="https://phimmoiyy.net/wp-content/uploads/2023/03/phimmoi.png" alt="Phimmoi" />
                            </div>
                            <div className="text">
                                <p style={{ color: '#fff' }}>
                                    <a href="https://phimmoiyy.net">
                                        <b>Phimmoi</b>
                                    </a>
                                    - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.</p>
                            </div>
                        </div>
                        <div className="columenu">
                            <div className="item">
                                <h4>Phim mới</h4>
                                <ul>
                                    <li>
                                        <a href="/the-loai/phim-khoa-hoc">Phim Khoa Học</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/the-loai/phim-kinh-di">Phim Kinh Dị</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/the-loai/phim-chieu-rap">Phim Tình Cảm</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/the-loai/phim-hinh-su">Phim Cổ Trang</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/the-loai/phim-hanh-dong">Phim Hành Động</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <h4>Phim hay</h4>
                                <ul>
                                    <li>
                                        <a href="/quoc-gia/phim-au-my">Phim Âu Mỹ</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/quoc-gia/phim-han-quoc">Phim Việt Nam</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/quoc-gia/phim-trung-quoc">Phim Trung Quốc</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/quoc-gia/phim-nhat-ban">Phim Nhật Bản</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="item">
                                <h4>Thông tin</h4>
                                <ul>
                                    <li>
                                        <a href="/gioi-thieu">Giới thiệu</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/lien-he-chung-toi">Liên hệ chúng tôi</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">Điều khoản sử dụng</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/chinh-sach-rieng-tu">Chính sách riêng tư</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="/khieu-nai-ban-quyen">Khiếu nại bản quyền</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <div className="fmenu">
                        <div className="copy">© Phimmoi </div>
                        <ul id="menu-footer" className="menu">
                            <li id="menu-item-14" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-14">
                                <a href="#">
                                    <i className="fab fa-facebook-f">
                                    </i>
                                </a>
                            </li>
                            <li id="menu-item-15" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15">
                                <a href="#">
                                    <i className="fab fa-twitter">
                                    </i>
                                </a>
                            </li>
                            <li id="menu-item-16" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                                <a href="#">
                                    <i className="fab fa-instagram">
                                    </i>
                                </a>
                            </li>
                            <li id="menu-item-17" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
                                <a href="#">
                                    <i className="fab fa-youtube">
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;