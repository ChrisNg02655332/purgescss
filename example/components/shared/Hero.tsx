type Props = {
  title: string
  subtitle: string | React.ReactElement
}

const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className='hero'>
      <div className='hero-body px-0' style={{ paddingLeft: 0 }}>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
      </div>
    </section>
  )
}

export default Hero
