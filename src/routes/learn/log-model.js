export default {
  namespace: 'learn',
  state: {
    loading: false,
    list: []
  },
  reducers: {
    setList (state, action) {
      return {
        ...state,
        list: action.data
      }
    }
  },
  effects: {
    * getList (action, {put, call}) {
      fetch('/api/learn/log').then(res => res.json()).then(data => {
        yield put({type: 'setList', data: data})
      })
    }
  }
}
