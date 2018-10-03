import React from 'react'
import styles from './list.css'
import imageURL from '../../const/bookImages/0b1eab892b07a34c06b144b83ca51686_0_0_0_0.jpg'
import  {Button} from 'antd';



class list extends React.Component{
    constructor(props){
        // noinspection JSAnnotator
        super(props);
        this.state = {
            books : [
                {
                    "name":"小王子",
                    "imgURL":imageURL,
                    "describe":"圣埃克苏佩里 著；马振聘 译 / 人民文学出版社 / 2003-08 / 精装 / ￥22.00",
                    "price":"￥16",
                },
                {
                    "name":"王子",
                    "imgURL":imageURL,
                    "describe":"圣埃克苏佩里 著；马振聘 译 / 人民文学出版社 / 2003-08 / 精装 / ￥32.00",
                    "price":"￥17",
                },
                {
                    "name":"小王子",
                    "imgURL":imageURL,
                    "describe":"圣埃克苏佩里 著；马振聘 译 / 人民文学出版社 / 2003-08 / 精装 / ￥22.00",
                    "price":"￥16",
                },
                {
                    "name":"王子",
                    "imgURL":imageURL,
                    "describe":"圣埃克苏佩里 著；马振聘 译 / 人民文学出版社 / 2003-08 / 精装 / ￥32.00",
                    "price":"￥17",
                }

            ]
        }


    }

    render(){
        let newJson = this.state.books;
        return (
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    <a href="" className={styles.item}>
                        <span className={styles.text}>综合排序</span>
                    </a>
                    <a href="" className={styles.item}>
                        <span className={styles.text}>价格</span>
                    </a>
                    <a href="" className={styles.item}>
                        <span className={styles.text}>豆瓣评分</span>
                    </a>
                </div>

                {
                    // console.log(JSON);
                    newJson.map((item,index) => {
                        return (
                            <div className={styles.books} key={index}>
                                <div className={styles.bookImage}>
                                    <img src={item.imgURL}/>
                                    <div className={styles.bookMessage}>
                                        <div className={styles.title}><b>{item.name}</b></div>
                                        <div className={styles.price}>{item.price}</div>
                                        <div className={styles.describe}>{item.describe}</div>
                                        {/*<Button className={styles.button}>aaa</Button>*/}
                                    </div>
                                </div>
                                <div className={styles.line}><span><b></b></span></div>
                            </div>
                        )
                    })
                }

                
            </div>
        )
    }
}

export default list