import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import NotFound from './NotFound'
import { RecoilRoot } from 'recoil'

ReactDOMClient.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/active" element={<App />} />
        <Route path="/completed" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
)

reportWebVitals()
