// Headerjs
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi there and greetings!";
//   return greet;
// };

import React, {Component} from 'react'
import styles from './header.css';//导入

class Header extends Component{
  render() {
    return (
      <div className={styles.root}>
        <span className={styles.title}>网罗广财二手书</span>
          <span className={styles.entry}>
              <span className={styles.login}>登陆/注册</span>
              <span>个人中心</span>
          </span>
      </div>
    );
  }
}

export default Header