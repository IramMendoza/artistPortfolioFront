import TeamCard from "./TeamCard"

const TeamCardsContainer = ({ members, refContainer }) => {

  return (
    <div className=" pl-2 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div style={{ display: 'flex' }}>
        {members.map((item) => (
          <TeamCard id={item.id} item={item} refContainer={refContainer} />
        ))}
      </div>
    </div>
  )
}

export default TeamCardsContainer
