import ReactDom from 'react-dom';
import React from 'react';
import store from 'store';
import { Provider } from 'react-redux';
import CountButton from 'component/CountButton';

let app = (
    <Provider store={store}>
        <CountButton/>
    </Provider>
);

ReactDom.render(app, document.getElementById('app'))
