type Props = {
  title: string
  subtitle: string
}

const Hero = ({ title, subtitle }: Props) => {
  return (
    <section className='hero'>
      <div className='hero-body'>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
      </div>
    </section>
  )
}

export default Hero
