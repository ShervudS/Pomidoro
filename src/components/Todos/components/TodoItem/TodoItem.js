import React from 'react';

// styles
import './index.less';

// antd
import { PageHeader, Button, Descriptions } from 'antd';
import { CloseOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';

const TodoItem = ({ title, descr }) => {
    return (
        <div className="todo__item">
            <PageHeader
                className="site-page-header"
                title={title}
                extra={[
                    <Button type="primary" shape="round" key="1">
                        Start
                    </Button>,

                    <Button
                        type="primary"
                        shape="round"
                        icon={<CloseOutlined />}
                        key="2"
                    />,

                    <Button
                        type="primary"
                        shape="round"
                        icon={<CheckOutlined />}
                        key="3"
                    />,

                    <Button
                        type="primary"
                        shape="round"
                        icon={<EditOutlined />}
                        key="4"
                    />,
                ]}
            >
                <Descriptions column={2}>
                    <Descriptions.Item label="Description">
                        {descr}
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    );
};

export default TodoItem;
