import React from 'react'
import Student from './components/Student'

const App2 = () => {
  return (
    <div className="App2">
        <Student name="田中太郎" age="19" gender="男"/>
        <Student name="鈴木大介" age="19" gender="男"/>
        <Student name="山田花子" age="18" gender="男"/>
    </div>
  )
}

export default App2