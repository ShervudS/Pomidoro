import React from 'react';

// antd
import { PageHeader, Button, Descriptions } from 'antd';
import { CloseOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';

const TodoItem = ({ key, title, descr }) => {
    return (
        <PageHeader
            key={key}
            className="site-page-header"
            title={title}
            extra={[
                <Button type="primary" shape="round" key="1">
                    Начать выполнение
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
                <Descriptions.Item label="Association">
                    {descr}
                </Descriptions.Item>
            </Descriptions>
        </PageHeader>
    );
};

export default TodoItem;
