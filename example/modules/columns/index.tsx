import { Hero, LinkItem } from "../../components/shared"

const columns = [
  {
    icon: "fas fa-columns",
    title: "Basic",
    subtitle: (
      <p>
        A simple way to build <strong>responsive columns</strong>
      </p>
    ),
  },
  {
    icon: "fas fa-columns",
    title: "Size",
    subtitle: (
      <p>
        Sizes Define the <strong>size</strong> of each column
        <strong> individually</strong>
      </p>
    ),
  },
  {
    icon: "fas fa-columns",
    title: "Responsiveness",
    subtitle: (
      <p>
        Handle <strong>different</strong> column layouts for each{" "}
        <strong>breakpoint</strong>
      </p>
    ),
  },
  {
    icon: "fas fa-columns",
    title: "Nesting",
    subtitle: (
      <p>
        Nesting A simple way to build <strong>responsive columns</strong>
      </p>
    ),
  },
  {
    icon: "fas fa-columns",
    title: "Gap",
    subtitle: (
      <p>
        Customize the <strong>gap</strong> between the columns
      </p>
    ),
  },
  {
    icon: "fas fa-columns",
    title: "Options",
    subtitle: (
      <p>
        Design different <strong>types</strong> of column layouts
      </p>
    ),
  },
]

const Columns = () => {
  return (
    <div className='column'>
      <Hero
        title='Columns'
        subtitle={
          <p>
            The power of <strong>Flexbox</strong> in a simple interface
          </p>
        }
      />

      <div className='columns is-multiline'>
        {columns.map((column) => (
          <div className='column is-half-tablet is-one-third-desktop'>
            <LinkItem
              icon={column.icon}
              title={column.title}
              subtitle={column.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default {
  name: "Columns",
  path: "/columns",
  main: Columns,
}
