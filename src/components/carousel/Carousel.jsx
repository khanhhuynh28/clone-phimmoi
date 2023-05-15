import { Carousel } from 'antd';
import './carousel.scss';


function Carousels() {
    const onChange = (currentSlide) => {
    };
    return (
        <div className="carousel-container">
            <div className='carousel'>
                <Carousel afterChange={onChange} autoplay>
                    <div className='carousel-poster'>
                        <div className='carousel-poster-item'>
                            <img className='image-item left' src="https://image.tmdb.org/t/p/w500/sb8N2H8w4majKPD8bLZ0YxtDHhD.jpg" alt="" />
                            <img className='image-item' src="https://image.tmdb.org/t/p/w500/fiRhm5r2acUhOeVFYRvG1qiAlM4.jpg" alt="" />
                        </div>

                    </div>
                    <div className='carousel-poster'>
                        <div className='carousel-poster-item'>
                            <img className='image-item left' src="https://baocantho.com.vn/imagetsdt/tsdt/2022/20220721/images/C%C3%B4%20g%C3%A1i%20t%E1%BB%AB%20qu%C3%A1%20kh%E1%BB%A9.jpg" alt="" />
                            <img className='image-item' src="https://petrotimes-cdn.mastercms.vn/stores/news_dataimages/thuydung/082022/04/14/feaf81c93e3141218825f8e4055896d8.jpg?rt=20220804143632" alt="" />
                        </div>
                    </div>
                    <div className='carousel-poster'>
                        <div className='carousel-poster-item'>
                            <img className='image-item left' src="https://image.tmdb.org/t/p/w500/xfCBPMODWJrFWiib3C2VAFBRwLg.jpg" alt="" />
                            <img className='image-item' src="https://image.tmdb.org/t/p/w500/9ID2kmLD67Lcuum2AcniuG2jB0F.jpg" alt="" />
                        </div>
                    </div>
                    <div className='carousel-poster'>
                        <div className='carousel-poster-item'>
                            <img className='image-item left' src="https://media.doisongphapluat.com/thumb_x1280x857/media/dang-nhat-duy/2022/12/03/poster-phim-tran-thanh-nha-ba-nu-dspl-31220222.jpg" alt="" />
                            <img className='image-item' src="https://youthvietnam.vn/wp-content/uploads/2021/06/mau-poster-phim-viet-nam.jpg" alt="" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Carousels;

