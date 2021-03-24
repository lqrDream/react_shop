import {Component} from 'react'
import PropsTypes from 'prop-types'
import styles from './Ltabbar.module.css'
import LTabBarItem from "./LtabbarItem";

export default class LTabBar extends Component {
    static defaultProps = {
        content: [
            {text: '首页', icon: '/images/1.jpg'},
            {text: '展示', icon: '/images/2.jpg'},
            {text: '分类', icon: '/images/3.jpg'},
            {text: '我的', icon: '/images/4.jpg'}
            ]
    };
    static propTypes = {
        content: PropsTypes.arrayOf(PropsTypes.shape({
            text: PropsTypes.string,
            icon: PropsTypes.string
        })),
    }

    render() {
        let {content} = this.props
        return (
            <div id={styles['L-tab-bar']}>
                {
                    content.map((item, index) => {
                        return <LTabBarItem {...item} key={index} activeColor='pink'/>
                    })
                }
            </div>
        )
    }
}

