import { Dropdown } from 'react-bootstrap';
import './style.scss'

const DropNation = () => (
    <Dropdown>
        <Dropdown.Toggle className='dropdown-category'>
            Quốc gia
        </Dropdown.Toggle>
        <Dropdown.Menu >
            <Dropdown.Item>Phim Âu Mỹ</Dropdown.Item>
            <Dropdown.Item>Phim Việt Nam</Dropdown.Item>
            <Dropdown.Item>Phim Nhật Bản</Dropdown.Item>
            <Dropdown.Item>Phim Trung Quốc</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
)
export default DropNation;