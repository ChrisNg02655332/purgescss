type Props = {
  title: string
  icon?: string
  subtitle?: string | React.ReactElement
}

const LinkItem = ({ icon, title, subtitle }: Props) => {
  return (
    <div className='flex flex-row items-start space-x-5'>
      <i className={`text-2xl ${icon}`} />
      <div>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default LinkItem
