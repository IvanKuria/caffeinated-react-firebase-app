import React from 'react'

function Hero() {
  return (
    <>
      <h1>Coffee Tracking for Coffee Enthusiates!</h1>
      <div className="benefits-list">
        <h3 className="font-bolder">Try <span
        className="text-gradient">Caffiened</span> and start...</h3>
        <p>✅ Tracking every coffee</p>
        <p>✅ Measuring your blood caffeine levels</p>
        <p>✅ Costing and quantifying your addiction</p>
      </div>
      <div className="card infor-card">
        <div>
          <i className="fa-solid fa-circle-info"></i>
          <h3>Did you know...</h3>
          <h5>That caffeine&apos; half-life is abour 5 hours?</h5>
          <p>This means that after 5 hours, half the caffeine you consume
            is still in your system keeping you alert longer. So if you
            drink a cup of coffee with 200mg of caffeine, 5 hours later,
            you&apos;ll still have about 100mg of caffeine in your system.</p>
        </div>
      </div>
    </>
  )
}

export default Hero