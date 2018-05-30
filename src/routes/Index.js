import React from 'react'
import { connect } from 'dva'

import { NavBar, Icon } from 'antd-mobile'

function IndexPage() {
  return (
    <section>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
      >welcome here</NavBar>
    </section>
  )
}

export default connect()(IndexPage)
