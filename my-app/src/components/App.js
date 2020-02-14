import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
const App = () => (
  
    <div style="width:300px"> 
       <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="ToDoList" key="1">
    <div>
    <Button block size="width:10px">Create Todo</Button></div>
    <AddTodo></AddTodo>
    <Footer></Footer>
    <VisibleTodoList></VisibleTodoList>

    </TabPane>
    <TabPane tab="Users" key="2">
      Content of Tab Pane 2
    </TabPane>

  </Tabs>
  </div>   
)
document.getElementById('container') 
export default App