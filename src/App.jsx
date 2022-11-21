import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Guilherme" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Quas quasi atque iure facilis illo labore nulla. 
          Aspernatur sunt animi officiis vel consectetur? 
          Numquam quam quaerat eum incidunt distinctio, a sapiente."
      />
      <Post 
        author="Jobson"
        content="Mto foda!!"
      />
    </>

  )
}

