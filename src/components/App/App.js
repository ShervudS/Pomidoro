import React from 'react';

// Styles
import './index.less';

// components
import Todos from '../Todos';

// antd
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
    return (
        <div className="app">
            <Layout>
                <Content>
                    <Todos />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
