

const SectionHeader = ({header, color}) => {
  return (
        <h2 style={{ color : color }} className=' md:font-bold lg:text-5xl font-semibold text-slate-100 text-4xl py-[3vh]'>
            {header}
        </h2>
  )
}

export default SectionHeader