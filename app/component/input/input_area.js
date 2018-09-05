import React from 'react'
import styles from './input_area.css'

class input_area extends React.Component{
    render(){
        return (
            <div className={styles.wrapper}>
                <div className={styles.input_area}>
                    <input/>
                    <button>搜索</button>
                </div>
            </div>
        )
    }
}

export default input_area