import React from 'react'
import styles from './input_area.css'

class input_area extends React.Component{
    render(){
        return (
            <div className={styles.wrapper}>
                <div className={styles.bigtitle}>广财二手书交易平台</div>
                <div className={styles.input_area}>
                    <input placeholder='商品名称、作者'/>
                    <button>搜索</button>
                </div>
            </div>
        )
    }
}

export default input_area