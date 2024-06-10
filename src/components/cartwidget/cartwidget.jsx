import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const Cartwidget = () => {
    return (
        <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: '30px'}}/>
        </Badge>
    );
};

export default Cartwidget;
