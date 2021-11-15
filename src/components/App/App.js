import React from 'react';

// Styles
import './index.less';

// components

// antd
import { Layout, Form, Input, Select } from 'antd';
const { Content } = Layout;
const { TextArea } = Input;

function App() {
    const selectTags = [];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="app">
            <Layout>
                <Content>
                    <div className="site-layout-content">
                        <div className="add-form">
                            <Form name="add-form" autoComplete="off">
                                <Form.Item
                                    label="Title"
                                    name="username"
                                    className="add-form-item"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="description"
                                >
                                    <TextArea />
                                </Form.Item>

                                <Form.Item
                                    label="Tags"
                                    name="tags"
                                >
                                    <Select
                                        mode="tags"
                                        className="add-form__tags"
                                        onChange={handleChange}
                                    >
                                        {selectTags}
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
