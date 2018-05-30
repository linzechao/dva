export default {
  namespace: 'learn',
  state: {
    list: null
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.data
      }
    }
  },
  effects: {
    * logList(action, { put, call }) {
      const users = yield put(fetchUsers, action.data)
      yield put({ type: 'save', data: users })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/learn/log') {
          dispatch({ type: 'logList' })
        }
      })
    }
  }
}
