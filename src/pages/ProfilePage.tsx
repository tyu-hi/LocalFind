import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { DefaultProfile } from "../svg-icons.tsx/DefaultProfile"

//After use is logged in, I would like for the signup/sign in to disappear, 
//and be replaced by the icon of the user

const ProfilePage = () => {
  return (
    <div>
        <NavBar/>

        <div className="mx-auto width-full p-10 ml-10 mr-10">
          
          <div className="flex flex-col items-center mb-10 mt-10 w-full">
            {/*top*/}
            <div className="flex flex-row">
              {/*change profile pic to passable {variable} later */}
              <div className="w-full rounded-full overflow-hidden">
                <DefaultProfile />
              </div>
              {/*profile details*/}
              <div className="mt-5 w-full">
                <h2 className = "text-2x1 font-bold text-gray-700">User Name</h2>
                {/*change location to passable {variable} later */}
                <p className="text-gray-600">Location</p>
                {/*change Bio/Stats to passable {variable} later */}
                <p className="text-sm mb-2 text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
              </div>
            </div>
             
            {/*bottom*/}
            <div className="flex flex-row mt-8 w-full">
              {/*side bar*/}
              <div className=" w-40">
                <div className="grid grid-cols-6 gap-4 text-center w-50">
                  {/* Array items */}
                  <div className="bg-gray-200 p-2 col-span-6">Map</div>
                  <div className="bg-gray-200 p-2 col-span-6">Reviews</div>
                  <div className="bg-gray-200 p-2 col-span-6">Bookmarks</div>
                  <div className="bg-gray-200 p-2 col-span-6">Reservations</div>
                  <div className="bg-gray-200 p-2 col-span-6">Friends</div>
                  <div className="bg-gray-200 p-2 col-span-6">Acheivements</div>
                </div>
              </div>

              {/*map of resturants you ate at*/}
              <div className="w-60 h-100 bg-gray-200 border p-4 ml-10">
                Map.
              </div>
            </div> 

          </div>
        </div>

        <Footer/>
    </div>

  )
}

export default ProfilePage