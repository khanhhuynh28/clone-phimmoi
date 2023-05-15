import { Tabs } from 'antd';
import './overview.scss';
import { API_IMG } from '../../../../../api/constants.api';
function Overview({ overview, castList }) {
    const items = [
        {
            key: '1',
            label: `Thông tin`,
            children: (

                <div className='overview'>
                    <h5>Tóm tắt</h5>
                    {overview}
                </div>
            ),
        },
        {
            key: '2',
            label: `Diễn viên`,
            children: (
                <div className='casts' >
                    {castList?.map((item) => {
                        return (
                            <div key={item.id} className='cast'>
                                <img src={API_IMG + item.profile_path} alt="" className='image' />
                                <div className='name'>
                                    <h4 >{item.name}</h4>
                                    <span>{item.character}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>
            ),
        },
        {
            key: '3',
            label: `Trailer`,
            children: (<div></div>),
        },
    ];
    return (
        <div className="overview-container">
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
}

export default Overview;