import React from 'react'
import styles from './underside.css'

export default class underside extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
             <div className={styles.underside}>
                 <div className={styles.text}>广财二手书交易平台，值得你的信赖</div>
             </div>
        )
    }
}
