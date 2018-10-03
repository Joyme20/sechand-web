import React from 'react'
import Sidebar from './sidebar/sidebar'
import ImgSlider from  './imgSlider/imgslider'
import BookList from './booklist/booklist'

import styles from  './content.css'


export default class content extends React.Component{
    render(){
        return (
            <div className={styles.contentWrapper}>
                <Sidebar/>
                <ImgSlider/>
                <BookList/>
            </div>
        )
    }
}