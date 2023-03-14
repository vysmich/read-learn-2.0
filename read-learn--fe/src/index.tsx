import { createRoot } from 'react-dom/client'
import App from 'components/App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './scss/base.scss'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
