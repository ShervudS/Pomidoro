import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

// redux store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// Components
import App from './components/App';

// Styles
import 'antd/dist/antd.less';
import './styles/index.less';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,

    document.getElementById('root')
);
