import React from 'react'
import { connect } from 'dva'

import { NavBar, Icon, List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

function Log() {

  fetch('/api/learn/log').then(res => res.json()).then(data => {
    console.log(data)
    /*
    data.map(item =>
      <List key={ item.date }>
        <Item multipleLine extra={ item.status }>
          { item.name }
          <Brief>{ item.date }</Brief>
        </Item>
      </List>
    )
    */
  })

  return (
    <section>
      <NavBar icon={ <Icon type="left" /> }>
        成长通关记录
      </NavBar>
      <List>
        <Item multipleLine extra="失败">
          UI 设计
          <Brief>2018-5-30 17:37:19</Brief>
        </Item>
      </List>
    </section>
  )
}

export default connect()(Log)
