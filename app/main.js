//main.js 
import React from 'react';
import {render} from 'react-dom';
import Header from './component/header/header';
import Input from './component/input/input_area';
import Content from  './component/content/content';
import Underside from './component/underside/underside';
import List from './component/list/list';
import Personal from './component/personal/personal';

import './main.css';//使用require导入css文件

render(
    <div>
        <Header/>
        <Input/>
        <List/>
        {/*<Personal/>*/}
    </div>,
        document.getElementById('root')
)