

const SectionHeader = ({header, color}) => {
  return (
        <h2 style={{ color : color }} className=' md:font-bold font-semibold text-slate-100 pl-10 text-4xl pb-5'>
            {header}
        </h2>
  )
}

export default SectionHeader