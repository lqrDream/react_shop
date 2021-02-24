import  React,{Component} from 'react'

export default class Home extends Component{
    render() {
        return(
            <div>
                <h3>头部</h3>
            </div>
        )
    }
    componentDidMount() {
        this.axios('/m5/home/multidata').then(res=>{console.log(res)})
    }
}
