//main.js 
import React from 'react';
import {render} from 'react-dom';
import Header from './component/header/header';
import Input from './component/input/input_area'
import './main.css';//使用require导入css文件

render(
    <div>
        <Header/>
        <Input/>
    </div>,
        document.getElementById('root')
)