const ListRenderer = ({ list, CardComponent, display }) => {

  if (!list){
    return <div>Loading...</div>
  }
  return (
    <div style={{ display : display }}>
      {list.map((item) => (
        <CardComponent key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ListRenderer
