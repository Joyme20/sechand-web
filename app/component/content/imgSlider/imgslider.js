import React from 'react'
import styles from './imgSlider.css'
export default class imgslider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: [
                {id:0,title:'专题:大学低价教材'},
                {id:1,title:'活动:开学季校园合伙人'},
                {id:2,title:'讲座:北京书友免费报名'},
                {id:3,title:'店铺:学到老书店'},
                {id:4,title:'店铺:小古堂'}
            ],
        }
        this.showImg = this.showImg.bind(this)
        this.nextImg = this.nextImg.bind(this)
    }

    showImg(e){
        // console.log(e.target.parentNode.previousSibling.childNodes)

        e.target.className = styles.active

        var array = new Array()
        array = e.target.parentNode.previousSibling.childNodes
        for (let i=0;i<array.length;i++){
           array[i].className = styles.fadeout
        }
        array[e.target.id].className  = styles.fadeIn
    }

    nextImg(e) {
        e.target.className = ' '

        setInterval(() => {
            console.log(e)
        },1000)
    }



    render(){
        let {list} = this.state;
        return (
        <div className={styles.slider}>
            <div>
                <img src='http://img0.kfzimg.com/operation/13/83/138383d52dbe4d954dc4243794854b23.jpg'/>
                <img src='http://img0.kfzimg.com/operation/de/c0/dec09042dd5fa27cf68cfe3e219bb6bb.jpg'/>
                <img src='http://img0.kfzimg.com/operation/de/38/de38771ac09d727b7cdfb783a22941f8.jpg'/>
                <img src='http://img0.kfzimg.com/operation/13/f5/13f516812cc303c01312a7bf323340d2.jpg'/>
                <img src='http://img0.kfzimg.com/operation/c4/6e/c46e46a4db3e043135d859b21e05f961.jpg'/>
            </div>
            <div className={styles.title}>
                {
                    list.map((data) => <li key={data.id} id={data.id} onMouseEnter={this.showImg} onMouseLeave={this.nextImg}>{data.title}</li>)
                }
            </div>
        </div>
        )
    }
}