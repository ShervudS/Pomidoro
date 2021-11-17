import React from 'react';

// redux
import { connect } from 'react-redux';

// antd
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

const TodoForm = () => {



    return (
        <>
            <Form>
                <Form.Item
                    name="Title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Descr">
                    <TextArea />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Button
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
