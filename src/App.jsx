import React from 'react'
import Header from './components/Header'
import hero from './img/gamepadd.png'


const App = () => {
  return (
    <div>
      <Header></Header>
      <main className='font-tenor'>
      <section
            className="w-full py-20 mt-6"
            style={{
                background: 'linear-gradient(90deg, #672870 0%, #4FE0FF 100%)'
            }}
        >
            <div className="container  flex items-center justify-between h-full">
                {/* Text Section */}
                <div className="max-w-3xl text-white space-y-6">
                    <h1 className="text-4xl font-bold leading-snug">
                        Отправляйся в приключения с нашими эпическими лут-корзинами и наборами!
                    </h1>
                    <p className="text-base max-w-xl font-light leading-relaxed">
                        Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень мастерства!
                        С нашей поддержкой каждое твое действие станет частью великого искусства, а победы — результатом
                        точного плана и безупречной подготовки!
                    </p>
                    <button className="bg-white text-[#672870] font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                        В каталог
                    </button>
                </div>

                {/* Image */}
                <div className="absolute h-[500px] left-[874px]">
                    <img
                        src={hero}
                        alt="Gamepad placeholder"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default App
