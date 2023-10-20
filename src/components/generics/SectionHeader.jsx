const SectionHeader = ({header, color}) => {
  return (
        <h2 style={{ color : color }} className=' text-slate-100 pl-10 text-4xl py-[2rem]'>
            {header}
        </h2>
  )
}

export default SectionHeader