import React from 'react'
import { connect } from 'dva'

import $http from '../../utils/request'

import { NavBar, Icon, List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

/*
function LogList () {
  let List = []

  fetch('/api/learn/log').then(res => res.json()).then(data => {
    List = data
  })

  return List.map(item =>
    <List key={ item.date }>
      <Item multipleLine extra={ item.status }>
        { item.name }
        <Brief>{ item.date }</Brief>
      </Item>
    </List>
  )
}
*/

const Log = ({history}) => {
  const getList = () => {
    $http('/api/learn/log').then(data => {
      console.log(data)
    })
  }

  getList()

  const goBack = () => {
    history.goBack()
  }

  return (
    <section>
      <NavBar icon={ <Icon type="left" onClick={goBack} /> }>
        成长通关记录
      </NavBar>
      <List>
        <Item extra="失败">
          UI 设计
          <Brief>2018-05-30 17:37:19</Brief>
        </Item>
        <Item extra="成功">
          PE 原型
          <Brief>2018-06-04 16:28:11</Brief>
        </Item>
      </List>
    </section>
  )
}

export default connect()(Log)
