import {Component} from 'react'
import PropsTypes from 'prop-types'
import styles from './Ltabbaritem.module.css'

export default class LTabBarItem extends Component {
    static defaultProps = {
        activeColor: 'red'
    };
    static propTypes = {
        text: PropsTypes.string,
        icon: PropsTypes.string,
        activeColor: PropsTypes.string
    }

    render() {
        let {text, icon, activeColor} = this.props
        return (
            <div className={styles['tab-item']}>
                <img src={icon} alt=""/>
                <div style={{color: `${activeColor}`}}>{text}</div>
            </div>
        )
    }

}

