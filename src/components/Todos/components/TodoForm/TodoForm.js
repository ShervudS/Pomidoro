import React, { useState } from 'react';

// redux
import { connect } from 'react-redux';

// antd
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

const TodoForm = ({ onAddTodo }) => {
    const [formData, setFormData] = useState({
        id: Math.floor(Math.random() * 10000),
        title: '',
        descr: '',
    });

    const onSubmitForm = () => {
        onAddTodo(formData);
        setFormData({ id: '', title: '', descr: '' });
    };

    const onChangeInput = (e, name) => {
        if (name === 'title') {
            setFormData((prev) => {
                return {
                    ...prev,
                    title: e.target.value,
                };
            });
        }
        if (name === 'descr') {
            setFormData((prev) => {
                return {
                    ...prev,
                    descr: e.target.value,
                };
            });
        }
    };

    return (
        <>
            <Form onFinish={onSubmitForm}>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Please input your Title To Do',
                            whitespace: true,
                        },
                        {
                            min: 5,
                            message: 'Minimum symbols in title 5',
                        },
                        {
                            max: 50,
                            message: 'Maximum symbols in title 5',
                        },
                    ]}
                >
                    <Input onChange={(e) => onChangeInput(e, 'title')} />
                </Form.Item>
                <Form.Item label="Descr" name="descr">
                    <TextArea onChange={(e) => onChangeInput(e, 'descr')} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create Todo
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (formData) =>
            dispatch({ type: 'ADD_TODO', payload: formData }),
    };
}

export default connect(null, mapDispatchToProps)(TodoForm);
