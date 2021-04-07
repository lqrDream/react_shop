import React, {Component} from 'react'
import './home.css'

export default class Home extends Component {
    state = {
        a: '我是修改之后的值g'
    }

    render() {
        return (
            <div>
                我又测试时了，刚刚测试失败
            </div>
        )
    }

    // componentWillMount() {
    //     console.log('挂载前')
    //
    //     // 挂载前不能操作state里面的数据
    //      // console.log(this.state)
    //     // this.setState({a:'333'})
    //     // console.log(this.state)
    //     this.axios('/m5/home/multidata').then(res => {
    //         // console.log(res)
    //         this.setState({a:res.data})
    //         console.log('asss',this.state)
    //     })
    //
    // }
    //
    componentDidMount() {
        // this.axios('/m5/home/multidata').then(res => {
        //     console.log(res)
        // })
        console.log(this)

    }
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('触发了即将更新')
    //     // console.log(this.state)
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('触发了didUp')
    // }
    //
    // componentWillUnmount() {
    //     console.log('钩子销毁')
    // }

    //
    // static getDerivedStateFromProps(nextProp, nextState) {
    //     // console.log('getDerivedStateFromProps',nextState)
    //
    //     return null
    // }
    //
    // componentDidMount() {
    //     this.axios('/m5/home/multidata').then(res => {
    //         this.setState({a: res.data})
    //         console.log('asss', this.state)
    //     })
    // }
    //
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevState)
    // }
}
