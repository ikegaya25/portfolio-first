import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>Nissho Code</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>
    <section className='text-gray-700' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-cenrter'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-relaced'>Nissho Website</h1>
          <p className='mb-8 leading-relaxed'>現在、webエンジニアとしてデビューしたてのほやほやです。特異な言語はHTML,CSS,JavaScript, TypeAcript, PHP, SQL, Reactなどweb全般とPythonです。自分が作ったものを公開しておりますので、ぜひ見ていってください。</p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="/img/myPicture.png" alt="" />
        </div>
      </div>
    </section>
    <section  className='text-gray-700 border-t border-gray-200' id='about'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About me</h1>
          <p className='pb-10'>これまでマーケティング業界にス年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてｗEbサイトやwebappを個人として受注しております。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしております。</p>
          <p>いかに、個人としての成果物を公開しております。主にＳＮＳなどチャットアプリの構築をreactのjsやtsで実装しております。また、pysonを使ってAIによる株価の予測サイトを構築しました。また数件の事務所のウェブサイトの構築など多岐にわたります。</p>
        </div>
        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS CHAT App</h2>
              </div>
              <div>
                  <p>reactとjavascriptで投稿機能付きアプリ</p>
                  <a href="#" className='mt-3 text-gray-500'>もっとみる</a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS CHAT App</h2>
              </div>
              <div>
                  <p>reactとjavascriptで投稿機能付きアプリ</p>
                  <a href="#" className='mt-3 text-gray-500'>もっとみる</a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS CHAT App</h2>
              </div>
              <div>
                  <p>reactとjavascriptで投稿機能付きアプリ</p>
                  <a href="#" className='mt-3 text-gray-500'>もっとみる</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200' id='skills'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* left */}
        <div>
          <img src="./img/laptop-1839876_640.jpg" alt="" />
        </div>
        {/* right */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 text-center lg:text-left'>My Skiils</h1>
          {/* バー */}
          <div className='w-full'>
            <h2>HTML/CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
            </div>
          </div> 
          {/* バー */}
          <div className='w-full'>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"40%"}}>40%</div>
            </div>
          </div>
          {/* バー */}
          <div className='w-full'>
            <h2>JavaScript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"20%"}}>20%</div>
            </div>
          </div>
          {/* バー */}
          <div className='w-full'>
            <h2>React</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"10%"}}>10%</div>
            </div>
          </div>
          {/* バー */}
          <div className='w-full'>
            <h2>Python</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
            </div>
          </div>
                   

        </div>
      </div>
      

    </section>
</>

  )
}

export default App
