import React from 'react'
import styles from './booklist.css'

export default class booklist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books :[
                {id:0,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26元'},
                {id:1,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:2,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:3,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:4,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:5,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:6,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:7,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:8,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:9,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'},
                {id:10,src:'http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg',name:'东晋阀门政治',author:'田余庆',price:'26'}
            ],
        }
    }

    render(){
        let {books} = this.state;
        return(
            <div className={styles.listwrapper}>
                <div className={styles.suggest}>好书推荐<br/>V</div>
                <div className={styles.list}>
                    {
                        books.map((data) => <div key={data.id}><img src={data.src} className={styles.book}/><div className={styles.desc}>{data.name}<br/>作者:{data.author}<br/>价格:{data.price}</div></div>)
                    }
                </div>
            </div>
        )
    }
}

