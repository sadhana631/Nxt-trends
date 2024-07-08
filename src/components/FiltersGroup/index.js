import './index.css'

const FiltersGroup = () => {
  const renderRatingFiltersList = () => {
  ...
  }

  return (
    <div className="filters-group-container">
     <h1>Filters Group</h1>
     {/* Call the renderRatingFiltersList function here*/}
     {renderRatingFiltersList()}
    </div>
  )
}    

export default FiltersGroup
