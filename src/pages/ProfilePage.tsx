import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { DefaultProfile } from "../svg-icons.tsx/DefaultProfile"
import Map from '../components/Maps'
//After use is logged in, I would like for the signup/sign in to disappear, 
//and be replaced by the icon of the user

const ProfilePage = () => {
  return (
    <div>
        <NavBar/>

        <div className="mx-auto width-full">
          
          <div className="flex flex-col items-center justfiy-center mb-10 mt-10 w-full">
            {/*top*/}
            <div className="flex flex-row ">
              {/*change profile pic to passable {variable} later */}
              <div className="w-100 h-100 sm:w-100 sm:h-100 aspect-square rounded-full overflow-hidden ">
                <DefaultProfile />
                not fixed!!
              </div>
              {/*profile details*/}
              <div className="ml-10 mt-7">
                <h2 className = "text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700">User Name</h2>
                {/*change location to passable {variable} later */}
                <p className="text-gray-600 mt-2">Location</p>
                {/*change Bio/Stats to passable {variable} later */}
                <p className="text-sm mb-2 text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
              </div>
            </div>
             
            {/*bottom*/}

            {/*map of resturants you ate at*/}
            <div className="flex-row mt-10">
                Your Map
              <div className="bg-gray-200 border p-4 mt-3">
                <Map/>
              </div>
            </div>

            {/*reviews*/}
            <div className="flex-row mt-10">
              Your Reviews
              <div className="bg-gray-200 border p-4 mt-3">
                render reviews component by user
              </div>
            </div>

            {/*Playlists*/}
            <div className="flex-row mt-10">
              Your Playlists
              <div className="bg-gray-200 border p-4 mt-3">
                render playlist component by user
              </div>
            </div>
          </div>
        </div>

        <Footer/>
    </div>

  )
}

export default ProfilePage