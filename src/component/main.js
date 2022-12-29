const Main = (item) => {
    return (
      <>
        <div className="main">
          <div>
            <img
              src={`../Images/${item.imageUrl}`}
              alt="mount fuji"
              className="image"
            />
          </div>
          <div className="details">
            <div className="top">
              <img
                src={`../Images/${item.locationUrl}`}
                alt="location"
                className="location "
              />
              <p className="location ">{item.location}</p>
              <a href={item.googleMapsUrl} className="map ">
                View on Google Maps
              </a>
            </div>
            <div>
              <h2 className="tittle">{item.title}</h2>
              <h5 className="date">{`${item.startDate} - ${item.endDate}`}</h5>
              <p className="description">{item.description}</p>
            </div>
          </div>
        </div>
        <hr/>
      </>
    );
}
export default Main;