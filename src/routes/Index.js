import React from 'react'
import { connect } from 'dva'

import { Link } from 'dva/router'

import { NavBar, Icon, Button, Modal, Switch, List, WhiteSpace } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

function MarginBottom (props) {
  const component = new Array(props.num).join(',').split(',').map((_, index) => <WhiteSpace key={index} size="xl"></WhiteSpace>)
  return component
}

function IndexPage() {
  function toGoogle (e) {
    e.preventDefault()
    window.location.href = 'http://news.baidu.com'
  }

  function surprise () {
    Modal.alert('嘿，Man...')
  }

  return (
    <section>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        >welcome here</NavBar>

      <List>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android">
          <Link to="/login">/LOGIN （Android）<Brief> 这是一个简单的
            <br /> 登录页，很简单</Brief></Link>
        </Item>

        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          <Link to="/user">USER <Brief>INDEX</Brief></Link>
        </Item>

        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}>
          <Link to="/learn/log">LEARN <Brief>LOG</Brief></Link>
        </Item>

        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          <Link to="/learn">LEARN <Brief>INDEX</Brief></Link>
        </Item>
      </List>

      <MarginBottom num={40}></MarginBottom>

      <a href="http://www.baidu.com" onClick={ toGoogle }>百度一下</a>
      <Button type="primary" onClick={ surprise }>摁我，有惊喜</Button>
      <Switch></Switch>
    </section>
  )
}

export default connect()(IndexPage)
