import React, {Component} from 'react'

export default class Home extends Component {
    state = {
        a: ''
    }

    render() {
        return (
            <div>
                <h3>头部</h3>
                <button onClick={() => {
                    this.setState({a: 'sss'})
                }}>触发更新函数
                </button>
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
    // componentDidMount() {
    //     // this.axios('/m5/home/multidata').then(res => {
    //     //     console.log(res)
    //     // })
    // }
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
