import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			inputValue:'hi',
			list: []
		}
	}
	render(){
		return(
			<Fragment>
				<div>
					<label htmlFor="insertArea">input content</label>
					<input value={this.state.inputValue}
									id="insertArea"
									onChange={this.handleInputChange.bind(this)}
									className='input'
									ref={(input)=>{this.input = input}}
					/>
					<button onClick={this.handleBtnClick.bind(this)}> submit </button>
				</div>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return (
								// <li key={index} 
								// onClick={this.handleItemDelete.bind(this,index)}
								// >
								// 	{item}
								// </li>
								<div>
									<TodoItem content={item} 
														index={index}
														handleItemDelete={this.handleItemDelete.bind(this)}
														/>
								</div>
								)
						})
					}
				</ul>
				
			</Fragment>	

			)
	}
	handleInputChange(e){
		const value = this.input.value;
		this.setState({
			inputValue:value
		})
	}
	handleBtnClick(){
		this.setState({
			list:[...this.state.list,this.state.inputValue],
			inputValue: ''
		})
	}
	handleItemDelete(index){
		const list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list: list
		})
	}
}
export default TodoList;