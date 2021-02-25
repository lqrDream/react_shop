import {Component} from 'react'
import PropsTypes from 'prop-types'
import styles from './Lnav.module.css'
import {withRouter} from 'react-router-dom'

class Index extends Component {
    static defaultProps = {};
    static propTypes = {
        leftText: PropsTypes.string,
        rightText: PropsTypes.string,
        // oneOfType 限定两个类型验证
        title: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.string]),
        rightOnClick: PropsTypes.func
    }

    render() {
        let {leftText, rightText, title, history, rightOnClick, children} = this.props
        return (
            <div className={styles['nav-bar']}>
                <div className={styles.left} onClick={() => history.go()}>
                    {
                        leftText ? (<div>
                            &lt;{leftText}
                        </div>) : <span>&lt;</span>
                    }
                </div>

                {
                    title ?
                        (<div className={styles.center}>
                            {
                                Array.isArray(title) ? title.map((item, index) =>
                                    <span key={index}>{item}</span>) : <span>{title}</span>
                            }
                        </div>) :
                        <div className={styles.center}>
                            {children}
                        </div>
                }

                {
                    rightText && <div className={styles.right} onClick={()=>{
                        rightOnClick && rightOnClick()
                    }}>
                        {rightText}
                    </div>
                }
            </div>
        )
    }

}

export default withRouter(Index)