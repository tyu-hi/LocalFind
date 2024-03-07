const Playlists = () => {

  return (
    <div>
      <div className="flex">
        <div className="border rounded-md mr-5">
          playlist1
          <img src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg" className="w-40 h-40 rounded-md"/>

        </div>
        <div className="border rounded-md mr-5">

          playlist2
          <img src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg" className="w-40 h-40 rounded-md"/>

        </div>
        <div className="border rounded-md mr-5 focus:outline-none focus:border-2 focus:ring-orange focus:border-orange">
          playlist3
          <img src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg" className="w-40 h-40 rounded-md"/>

        </div>
        <div className="border rounded-md border-orange border-2 bg-gray-50 mr-5 w-40 h-40">
          <div className="flex align-items:center">
            <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3636 43.3068V0.147724H25.1932V43.3068H19.3636ZM0.681818 24.625V18.8295H43.875V24.625H0.681818Z" fill="#FF9E00"/>
            </svg>
          </div>
         
        </div>
      </div>

      {/* if clicked on a playlist, show the playlist below */}
      <div className="border rounded-md p-5 mt-5">
        expanded playlistName
        

      </div>

    </div>
  )
}

export default Playlists