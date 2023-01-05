const Main = (item) => {
    return (
      <>
        <div className="main">
          <div>
            <img
              src={`../my-travel-journal/Images/${item.imageUrl}`}
              alt="mount fuji"
              className="image"
            />
          </div>
          <div className="details">
            <div className="top">
              <div className="top-2">
                <img
                  src={`../my-travel-journal/Images/${item.locationUrl}`}
                  alt="location"
                  className="location "
                />
                <p className="location ">{item.location}</p>
              </div>
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
        <hr />
      </>
    );
}
export default Main;