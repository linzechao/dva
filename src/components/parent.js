import React from 'react'
import { connect } from 'dva'

export default connect()(() => {
  return (
    <React.Fragment>
      {this.props.children}
    </React.Fragment>
  )
})
