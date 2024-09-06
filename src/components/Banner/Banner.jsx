
export default function Banner({ text }) {
  return (
   <>
   <section className='main-p banner sec-background text-white'>
    <div className="container align-content-end" style={{height:120}}>
        <h1>{ text }</h1>
    </div>
   </section>
   </>
  )
}
