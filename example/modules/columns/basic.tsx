import { Hero } from "../../components/shared"

const Basics = () => {
  return (
    <div>
      <Hero
        title='Columns powered by Flexbox'
        subtitle='A simple way to build responsive columns'
      />
      <button className='button is-primary'>Primary</button>

      <div className='space-y-4'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default {
  name: "Basics",
  path: "/columns/basics",
  main: Basics,
}
