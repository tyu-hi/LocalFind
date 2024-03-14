import { useState, useEffect } from 'react';
import { MouseEventHandler } from 'react';

import { FIREBASE_FIRESTORE, FIREBASE_AUTH} from '../firebase/firebase';
import { Link, Navigate } from "react-router-dom";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { addDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuth } from "../firebase/firebase";

const Playlists = () => {

  const [addA, setAddA] = useState(false);
  const [addB, setAddB] = useState(false);
  const [addC, setAddC] = useState(false);
  const [expandedViewA, setExpandedViewA] = useState(false); // State variable for expanded view
  const [expandedViewB, setExpandedViewB] = useState(false); // State variable for expanded view
  const [expandedViewC, setExpandedViewC] = useState(false); // State variable for expanded view

  //firestore
  const [playlistNameA, setPlaylistNameA] = useState("");
  const [playlistNameB, setPlaylistNameB] = useState("");
  const [playlistNameC, setPlaylistNameC] = useState("");

  const [playlistImageA, setPlaylistImageA] = useState("");
  const [playlistImageB, setPlaylistImageB] = useState("");
  const [playlistImageC, setPlaylistImageC] = useState("");

  const [AplaylistRestaurant1, AsetPlaylistRestaurant1] = useState("");
  const [AplaylistRestaurant2, AsetPlaylistRestaurant2] = useState("");
  const [AplaylistRestaurant3, AsetPlaylistRestaurant3] = useState("");
  const [AplaylistRestaurant4, AsetPlaylistRestaurant4] = useState("");
  const [AplaylistRestaurant5, AsetPlaylistRestaurant5] = useState("");

  const [BplaylistRestaurant1, BsetPlaylistRestaurant1] = useState("");
  const [BplaylistRestaurant2, BsetPlaylistRestaurant2] = useState("");
  const [BplaylistRestaurant3, BsetPlaylistRestaurant3] = useState("");
  const [BplaylistRestaurant4, BsetPlaylistRestaurant4] = useState("");
  const [BplaylistRestaurant5, BsetPlaylistRestaurant5] = useState("");

  const [CplaylistRestaurant1, CsetPlaylistRestaurant1] = useState("");
  const [CplaylistRestaurant2, CsetPlaylistRestaurant2] = useState("");
  const [CplaylistRestaurant3, CsetPlaylistRestaurant3] = useState("");
  const [CplaylistRestaurant4, CsetPlaylistRestaurant4] = useState("");
  const [CplaylistRestaurant5, CsetPlaylistRestaurant5] = useState("");

  //omg...

  const [AplaylistAddress1, AsetPlaylistAddress1] = useState("");
  const [AplaylistAddress2, AsetPlaylistAddress2] = useState("");
  const [AplaylistAddress3, AsetPlaylistAddress3] = useState("");
  const [AplaylistAddress4, AsetPlaylistAddress4] = useState("");
  const [AplaylistAddress5, AsetPlaylistAddress5] = useState("");

  const [BplaylistAddress1, BsetPlaylistAddress1] = useState("");
  const [BplaylistAddress2, BsetPlaylistAddress2] = useState("");
  const [BplaylistAddress3, BsetPlaylistAddress3] = useState("");
  const [BplaylistAddress4, BsetPlaylistAddress4] = useState("");
  const [BplaylistAddress5, BsetPlaylistAddress5] = useState("");

  const [CplaylistAddress1, CsetPlaylistAddress1] = useState("");
  const [CplaylistAddress2, CsetPlaylistAddress2] = useState("");
  const [CplaylistAddress3, CsetPlaylistAddress3] = useState("");
  const [CplaylistAddress4, CsetPlaylistAddress4] = useState("");
  const [CplaylistAddress5, CsetPlaylistAddress5] = useState("");

  const [AplaylistRestaurantImage1, AsetPlaylistRestaurantImage1] = useState("");
  const [AplaylistRestaurantImage2, AsetPlaylistRestaurantImage2] = useState("");
  const [AplaylistRestaurantImage3, AsetPlaylistRestaurantImage3] = useState("");
  const [AplaylistRestaurantImage4, AsetPlaylistRestaurantImage4] = useState("");
  const [AplaylistRestaurantImage5, AsetPlaylistRestaurantImage5] = useState("");

  const [BplaylistRestaurantImage1, BsetPlaylistRestaurantImage1] = useState("");
  const [BplaylistRestaurantImage2, BsetPlaylistRestaurantImage2] = useState("");
  const [BplaylistRestaurantImage3, BsetPlaylistRestaurantImage3] = useState("");
  const [BplaylistRestaurantImage4, BsetPlaylistRestaurantImage4] = useState("");
  const [BplaylistRestaurantImage5, BsetPlaylistRestaurantImage5] = useState("");

  const [CplaylistRestaurantImage1, CsetPlaylistRestaurantImage1] = useState("");
  const [CplaylistRestaurantImage2, CsetPlaylistRestaurantImage2] = useState("");
  const [CplaylistRestaurantImage3, CsetPlaylistRestaurantImage3] = useState("");
  const [CplaylistRestaurantImage4, CsetPlaylistRestaurantImage4] = useState("");
  const [CplaylistRestaurantImage5, CsetPlaylistRestaurantImage5] = useState("");
  
  ///////////////////////////////////////////////

  const [user] = useAuthState(FIREBASE_AUTH);
  const currentUser = useAuth();
  const colRef = collection(FIREBASE_FIRESTORE, 'Users');

  //adding playlistdata for when add is true
  const handleAddA: MouseEventHandler<HTMLDivElement> = () => {
    setAddA(true);
    alert("Playlist A");
    setAddB(false);
    setAddC(false);
    setExpandedViewA(false);
    setExpandedViewB(false);
    setExpandedViewC(false);
  };
  const handleAddB: MouseEventHandler<HTMLDivElement> = () => {
    setAddB(true);
    alert("Playlist B");
    setAddC(false);
    setAddA(false);
    setExpandedViewA(false);
    setExpandedViewC(false);

  };
  const handleAddC: MouseEventHandler<HTMLDivElement> = () => {
    setAddC(true);
    alert("Playlist C");
    setAddB(false);
    setAddA(false);
    setExpandedViewA(false);
    setExpandedViewB(false);
  };

  const handleAddFalseA: MouseEventHandler<HTMLButtonElement> = () => {
    setAddA(false);
  };
  const handleAddFalseB: MouseEventHandler<HTMLButtonElement> = () => {
    setAddB(false);
  };
  const handleAddFalseC: MouseEventHandler<HTMLButtonElement> = () => {
    setAddC(false);
  };

  const handleExpandA: MouseEventHandler<HTMLDivElement> = () => {
    setExpandedViewA(true);
    setAddB(false);
    setAddC(false);

  };
  const handleExpandB: MouseEventHandler<HTMLDivElement> = () => {
    setExpandedViewB(true);
    setAddA(false);
    setAddC(false);
    
  };
  const handleExpandC: MouseEventHandler<HTMLDivElement> = () => {
    setExpandedViewC(true);
    setAddB(false);
    setAddA(false);
    
  };

  const handleEditA:  MouseEventHandler<HTMLDivElement> = () => {
    setAddA(true);
  }
  const handleEditB:  MouseEventHandler<HTMLDivElement> = () => {
    setAddB(true);
  }
  const handleEditC:  MouseEventHandler<HTMLDivElement> = () => {
    setAddC(true);
  }

  //displaying playlistdata fr when add is false
  useEffect(() => {
    if (currentUser) {
      const queryRef = query(colRef, where("uid", "==", currentUser.uid));
      getDocs(queryRef)
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              setPlaylistNameA(data.playlistNameA);
              setPlaylistNameB(data.playlistNameA);
              setPlaylistNameC(data.playlistNameA);

              setPlaylistImageA(data.playlistImageA);
              setPlaylistImageB(data.playlistImageB);
              setPlaylistImageB(data.playlistImageC);

              AsetPlaylistRestaurant1(data.AplaylistRestaurant1);
              AsetPlaylistRestaurant2(data.AplaylistRestaurant2);
              AsetPlaylistRestaurant3(data.AplaylistRestaurant3);
              AsetPlaylistRestaurant4(data.AplaylistRestaurant4);
              AsetPlaylistRestaurant5(data.AplaylistRestaurant5);

              BsetPlaylistRestaurant1(data.BplaylistRestaurant1);
              BsetPlaylistRestaurant2(data.BplaylistRestaurant2);
              BsetPlaylistRestaurant3(data.BplaylistRestaurant3);
              BsetPlaylistRestaurant4(data.BplaylistRestaurant4);
              BsetPlaylistRestaurant5(data.BplaylistRestaurant5);

              CsetPlaylistRestaurant1(data.CplaylistRestaurant1);
              CsetPlaylistRestaurant2(data.CplaylistRestaurant2);
              CsetPlaylistRestaurant3(data.CplaylistRestaurant3);
              CsetPlaylistRestaurant4(data.CplaylistRestaurant4);
              CsetPlaylistRestaurant5(data.CplaylistRestaurant5);

              AsetPlaylistAddress1(data.AplaylistAddress1);
              AsetPlaylistAddress2(data.AplaylistAddress2);
              AsetPlaylistAddress3(data.AplaylistAddress3);
              AsetPlaylistAddress4(data.AplaylistAddress4);
              AsetPlaylistAddress5(data.AplaylistAddress5);

              CsetPlaylistAddress1(data.CplaylistAddress1);
              CsetPlaylistAddress2(data.CplaylistAddress2);
              CsetPlaylistAddress3(data.CplaylistAddress3);
              CsetPlaylistAddress4(data.CplaylistAddress4);
              CsetPlaylistAddress5(data.CplaylistAddress5);

              BsetPlaylistAddress1(data.BplaylistAddress1);
              BsetPlaylistAddress2(data.BplaylistAddress2);
              BsetPlaylistAddress3(data.BplaylistAddress3);
              BsetPlaylistAddress4(data.BplaylistAddress4);
              BsetPlaylistAddress5(data.BplaylistAddress5);

              AsetPlaylistRestaurantImage1(data.AplaylistRestaurantImage1);
              AsetPlaylistRestaurantImage2(data.AplaylistRestaurantImage2);
              AsetPlaylistRestaurantImage3(data.AplaylistRestaurantImage3);
              AsetPlaylistRestaurantImage4(data.AplaylistRestaurantImage4);
              AsetPlaylistRestaurantImage5(data.AplaylistRestaurantImage5);

              BsetPlaylistRestaurantImage1(data.BplaylistRestaurantImage1);
              BsetPlaylistRestaurantImage2(data.BplaylistRestaurantImage2);
              BsetPlaylistRestaurantImage3(data.BplaylistRestaurantImage3);
              BsetPlaylistRestaurantImage4(data.BplaylistRestaurantImage4);
              BsetPlaylistRestaurantImage5(data.BplaylistRestaurantImage5);
              
              CsetPlaylistRestaurantImage1(data.CplaylistRestaurantImage1);
              CsetPlaylistRestaurantImage2(data.CplaylistRestaurantImage2);
              CsetPlaylistRestaurantImage3(data.CplaylistRestaurantImage3);
              CsetPlaylistRestaurantImage4(data.CplaylistRestaurantImage4);
              CsetPlaylistRestaurantImage5(data.CplaylistRestaurantImage5);
              
              
            });
          }
        })
        .catch((error) => {
          console.error("Error querying Firestore:", error);
        });
      }
    }, [currentUser]
  );

  //submit Form to firestore
  const submitPlaylistForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const currentUser = FIREBASE_AUTH.currentUser;
  
    if (currentUser){
      const currentUserId = currentUser.uid;
      console.log("new user adding playlist: ", currentUserId);

      const q = query(colRef, where('uid', '==' , currentUserId));
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const firstDoc = querySnapshot.docs[0];
          const docID = firstDoc.id;
          
          const docRef = doc(FIREBASE_FIRESTORE, 'Users', docID);
  
          await updateDoc(docRef, {
            playlistNameA: playlistNameA || 'Add Playlist',
            playlistNameB: playlistNameB || 'Add Playlist',
            playlistNameC: playlistNameC || 'Add Playlist',
  
            playlistImageA: playlistImageA || '',
            playlistImageB: playlistImageB || '',
            playlistImageC: playlistImageC || '',
  
            AplaylistRestaurant1: AplaylistRestaurant1 || '',
            AplaylistRestaurant2: AplaylistRestaurant2 || '',
            AplaylistRestaurant3: AplaylistRestaurant3 || '',
            AplaylistRestaurant4: AplaylistRestaurant4 || '',
            AplaylistRestaurant5: AplaylistRestaurant5 || '',
  
            BplaylistRestaurant1: BplaylistRestaurant1 || '',
            BplaylistRestaurant2: BplaylistRestaurant2 || '',
            BplaylistRestaurant3: BplaylistRestaurant3 || '',
            BplaylistRestaurant4: BplaylistRestaurant4 || '',
            BplaylistRestaurant5: BplaylistRestaurant5 || '',
  
            CplaylistRestaurant1: CplaylistRestaurant1 || '',
            CplaylistRestaurant2: CplaylistRestaurant2 || '',
            CplaylistRestaurant3: CplaylistRestaurant3 || '',
            CplaylistRestaurant4: CplaylistRestaurant4 || '',
            CplaylistRestaurant5: CplaylistRestaurant5 || '',
  
            AplaylistAddress1: AplaylistAddress1 || '',
            AplaylistAddress2: AplaylistAddress2 || '',
            AplaylistAddress3: AplaylistAddress3 || '',
            AplaylistAddress4: AplaylistAddress4 || '',
            AplaylistAddress5: AplaylistAddress5 || '',
  
            BplaylistAddress1: BplaylistAddress1 || '',
            BplaylistAddress2: BplaylistAddress2 || '',
            BplaylistAddress3: BplaylistAddress3 || '',
            BplaylistAddress4: BplaylistAddress4 || '',
            BplaylistAddress5: BplaylistAddress5 || '',
  
            CplaylistAddress1: CplaylistAddress1 || '',
            CplaylistAddress2: CplaylistAddress2 || '',
            CplaylistAddress3: CplaylistAddress3 || '',
            CplaylistAddress4: CplaylistAddress4 || '',
            CplaylistAddress5: CplaylistAddress5 || '',
  
            AplaylistRestaurantImage1: AplaylistRestaurantImage1 || '',
            AplaylistRestaurantImage2: AplaylistRestaurantImage2 || '',
            AplaylistRestaurantImage3: AplaylistRestaurantImage3 || '',
            AplaylistRestaurantImage4: AplaylistRestaurantImage4 || '',
            AplaylistRestaurantImage5: AplaylistRestaurantImage5 || '',
  
            CplaylistRestaurantImage1: CplaylistRestaurantImage1 || '',
            CplaylistRestaurantImage2: CplaylistRestaurantImage2 || '',
            CplaylistRestaurantImage3: CplaylistRestaurantImage3 || '',
            CplaylistRestaurantImage4: CplaylistRestaurantImage4 || '',
            CplaylistRestaurantImage5: CplaylistRestaurantImage5 || '',
  
            BplaylistRestaurantImage1: BplaylistRestaurantImage1 || '',
            BplaylistRestaurantImage2: BplaylistRestaurantImage2 || '',
            BplaylistRestaurantImage3: BplaylistRestaurantImage3 || '',
            BplaylistRestaurantImage4: BplaylistRestaurantImage4 || '',
            BplaylistRestaurantImage5: BplaylistRestaurantImage5 || '',
  
            
          })
          alert("Updated Playlist");

      } else {
        console.log("sorry no mathcing user found")
        alert("could not find user")
      }
    }
    catch(error) {
      console.log("Unable to get document", error)
      alert("error updating playlist");
    }
  }
};


 
  // Logic for hiding expanded view after form submission
  /*useEffect(() => {
   if (!add) {
      setExpandedView(false);
    }
  }, [add]);

  */

  return (
    <div>
      <div className="flex mt-3">
        <div className="border rounded-xl mr-5 relative">
          {playlistImageA ? (
            <div> 
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">{playlistNameA}</div>
              <img
                src={playlistImageA}
                className="w-[190px] h-[190px] rounded-xl overflow-hidden z-10" 
                onClick={handleExpandA}
                onDoubleClick={handleEditA}
                alt="playlist"
              />
              <div className='rounded-xl bg-gradient-to-b from-transparent to-black opacity-100 z-20'></div>
            </div>
          ) : (
            <div className="border rounded-xl border-orange border-2 bg-gray-50 
                          w-[190px] h-[190px] flex justify-center items-center hover:cursor-pointer"
                  onClick={handleAddA}>
              <div className="flex align-items:center ">
                <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3636 43.3068V0.147724H25.1932V43.3068H19.3636ZM0.681818 24.625V18.8295H43.875V24.625H0.681818Z" fill="#FF9E00"/>
                </svg>
              </div>

            </div>
          )}
        </div>

        <div className="border rounded-xl mr-5 relative">
          {playlistImageB ? (
            <div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">{playlistNameB}</div>
              <img
                src={playlistImageB}
                className="w-[190px] h-[190px] rounded-xl overflow-hidden z-10" 
                onClick={handleExpandB} 
                onDoubleClick={handleEditB}
                alt="playlist"
              />
              <div className='rounded-xl bg-gradient-to-b from-transparent to-black opacity-100 z-20'></div>
            </div>
          ) : (
            <div className="border rounded-xl border-orange border-2 bg-gray-50 
                w-[190px] h-[190px] flex justify-center items-center hover:cursor-pointer"
                onClick={handleAddB}>
              <div className="flex align-items:center ">
                <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3636 43.3068V0.147724H25.1932V43.3068H19.3636ZM0.681818 24.625V18.8295H43.875V24.625H0.681818Z" fill="#FF9E00"/>
                </svg>
              </div>
             
            </div>
          )}
        </div>

        <div className="border rounded-xl relative">
          {playlistImageC ? (
            <div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">{playlistNameC}</div>
              <img
                src={playlistImageC}
                className="w-[190px] h-[190px] rounded-xl overflow-hidden z-10" 
                onClick={handleExpandC}
                onDoubleClick={handleEditC}
                alt="playlist"
              />
              <div className='rounded-xl bg-gradient-to-b from-transparent to-black opacity-100 z-20'></div>
            </div>
          ) : (
            <div className="border rounded-xl border-orange border-2 bg-gray-50 
                w-[190px] h-[190px] flex justify-center items-center hover:cursor-pointer"
                onClick={handleAddC}>
              <div className="flex align-items:center ">
                <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3636 43.3068V0.147724H25.1932V43.3068H19.3636ZM0.681818 24.625V18.8295H43.875V24.625H0.681818Z" fill="#FF9E00"/>
                </svg>
              </div>

            </div>
          )}
        </div>
        
      </div>

      
    {/* if clicked on a playlist, show the playlist below */}
    
    {/* A PLAYLIST*/ }
    {addA ? (
      <div className="border rounded-xl mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
        <form onSubmit={submitPlaylistForm}>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            <label htmlFor="playlistNameA" className="block font-medium"></label>
                <input
                  id="playlistNameA"
                  type="text"
                  name="playlistNameA"
                  placeholder="Enter Playlist Name"
                  value={playlistNameA}
                  onChange={(e) => setPlaylistNameA(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:ring-indigo-600 focus:text-gray-900 focus:border-indigo-500 sm:text-sm"
                />
            <label htmlFor="playlistImageA" className="block font-medium"></label>
              <input
                id="playlistImageA"
                type="text"
                name="playlistImageA"
                placeholder="Enter Playlist Image Address"
                value={playlistImageA}
                onChange={(e) => setPlaylistImageA(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900  focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
              />
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <label htmlFor="AplaylistRestaurantImage1" className="block font-medium"></label>
                <input
                  id="AplaylistRestaurantImage1"
                  type="text"
                  name="AplaylistRestaurantImage1"
                  placeholder="Enter Playlist Image"
                  value={AplaylistRestaurantImage1}
                  onChange={(e) => AsetPlaylistRestaurantImage1(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className='flex flex-col p-1 hover:text-gray-500'>
              <div className='text-md '>
                <label htmlFor="AplaylistRestaurant1" className="block font-medium"></label>
                  <input
                    id="AplaylistRestaurant1"
                    type="text"
                    name="AplaylistRestaurant1"
                    placeholder="Enter Restaurant Name"
                    value={AplaylistRestaurant1}
                    onChange={(e) => AsetPlaylistRestaurant1(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                  />
              </div>
              <div className='text-sm'>
                <label htmlFor="AplaylistAddress1" className="block font-medium"></label>
                    <input
                      id="AplaylistAddress1"
                      type="text"
                      name="AplaylistAddress1"
                      placeholder="Enter Restaurant Image"
                      value={AplaylistAddress1}
                      onChange={(e) => AsetPlaylistAddress1(e.target.value)}
                      className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="AplaylistRestaurantImage2" className="block font-medium"></label>
                  <input
                    id="AplaylistRestaurantImage2"
                    type="text"
                    name="AplaylistRestaurantImage2"
                    placeholder="Enter Restaurant Image"
                    value={AplaylistRestaurantImage2}
                    onChange={(e) => AsetPlaylistRestaurantImage2(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="AplaylistRestaurant2" className="block font-medium"></label>
                    <input
                      id="AplaylistRestaurant2"
                      type="text"
                      name="AplaylistRestaurant2"
                      placeholder="Enter Restaurant Name"
                      value={AplaylistRestaurant2}
                      onChange={(e) => AsetPlaylistRestaurant2(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                    />
              </div>
              <div className='text-sm'>
                <label htmlFor="AplaylistAddress2" className="block font-medium"></label>
                      <input
                        id="AplaylistAddress2"
                        type="text"
                        name="AplaylistAddress2"
                        placeholder="Enter Restaurant Address"
                        value={AplaylistAddress2}
                        onChange={(e) => AsetPlaylistAddress2(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="AplaylistRestaurantImage3" className="block font-medium"></label>
                    <input
                      id="AplaylistRestaurantImage3"
                      type="text"
                      name="AplaylistRestaurantImage3"
                      placeholder="Enter Restaurant Image"
                      value={AplaylistRestaurantImage3}
                      onChange={(e) => AsetPlaylistRestaurantImage3(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />  
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="AplaylistRestaurant3" className="block font-medium"></label>
                      <input
                        id="AplaylistRestaurant3"
                        type="text"
                        name="AplaylistRestaurant3"
                        placeholder="Enter Restaurant Name"
                        value={AplaylistRestaurant3}
                        onChange={(e) => AsetPlaylistRestaurant3(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                      />
              </div>
              <div className='text-sm'>
                <label htmlFor="AplaylistAddress3" className="block font-medium"></label>
                      <input
                        id="AplaylistAddress3"
                        type="text"
                        name="AplaylistAddress3"
                        placeholder="Enter Restaurant Address"
                        value={AplaylistAddress3}
                        onChange={(e) => AsetPlaylistAddress3(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange '>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="AplaylistRestaurantImage4" className="block font-medium"></label>
                    <input
                      id="AplaylistRestaurantImage4"
                      type="text"
                      name="AplaylistRestaurantImage4"
                      placeholder="Enter Restaurant Image"
                      value={AplaylistRestaurantImage4}
                      onChange={(e) => AsetPlaylistRestaurantImage4(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="AplaylistRestaurant4" className="block font-medium"></label>
                        <input
                          id="AplaylistRestaurant4"
                          type="text"
                          name="AplaylistRestaurant4"
                          placeholder="Enter Restaurant Name"
                          value={AplaylistRestaurant4}
                          onChange={(e) => AsetPlaylistRestaurant4(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                        />
              </div>
              <div className='text-sm'>
                <label htmlFor="AplaylistAddress4" className="block font-medium"></label>
                      <input
                        id="AplaylistAddress4"
                        type="text"
                        name="AplaylistAddress4"
                        placeholder="Enter Restaurant Address"
                        value={AplaylistAddress4}
                        onChange={(e) => AsetPlaylistAddress4(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg  focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange'>
            <div className='p-6'>
              05
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="AplaylistRestaurantImage5" className="block font-medium"></label>
                    <input
                      id="AplaylistRestaurantImage5"
                      type="text"
                      name="AplaylistRestaurantImage5"
                      placeholder="Enter Restaurant Image"
                      value={AplaylistRestaurantImage5}
                      onChange={(e) => AsetPlaylistRestaurantImage5(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="AplaylistRestaurant5" className="block font-medium"></label>
                        <input
                          id="AplaylistRestaurant5"
                          type="text"
                          name="AplaylistRestaurant5"
                          placeholder="Enter Restaurant Name"
                          value={AplaylistRestaurant5}
                          onChange={(e) => AsetPlaylistRestaurant5(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                        />
              </div>
              <div className='text-sm'>
                <label htmlFor="AplaylistAddress5" className="block font-medium"></label>
                      <input
                        id="AplaylistAddress5"
                        type="text"
                        name="AplaylistAddress5"
                        placeholder="Enter Restaurant Address"
                        value={AplaylistAddress5}
                        onChange={(e) => AsetPlaylistAddress5(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>

          {/*submit form*/}
          
          <button type='submit' className="flex justify-center items-center relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white"
            onClick={handleAddFalseA}>
            Submit
          </button> 
        </form> 

        </div>
      </div>

     
    ) : null }
    { expandedViewA ? (

      <div className="border rounded-xl mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            {playlistNameA}
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <img src={AplaylistRestaurantImage1} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {AplaylistRestaurant1}
              </div>
              <div className='text-sm'>
                {AplaylistAddress1}
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <img src={AplaylistRestaurantImage2} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {AplaylistRestaurant2}
              </div>
              <div className='text-sm'>
                {AplaylistAddress2}
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <img src={AplaylistRestaurantImage3} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {AplaylistRestaurant3}
              </div>
              <div className='text-sm'>
                {AplaylistAddress3}
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <img src={AplaylistRestaurantImage4} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {AplaylistRestaurant4}
              </div>
              <div className='text-sm'>
                {AplaylistAddress4}
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              05
            </div>
            <div className='p-2 mt-1'>
              <img src={AplaylistRestaurantImage5} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {AplaylistRestaurant5}
              </div>
              <div className='text-sm'>
                {AplaylistAddress5}
              </div>
            </div>
          </div>

        
        </div>


      </div>

    ) : null }

    {/* B PLAYLIST*/ }
    {addB ? (
      <div className="border rounded-xl mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
        <form onSubmit={submitPlaylistForm}>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            <label htmlFor="playlistNameB" className="block font-medium"></label>
                <input
                  id="playlistNameB"
                  type="text"
                  name="playlistNameB"
                  placeholder="Enter Playlist Name"
                  value={playlistNameB}
                  onChange={(e) => setPlaylistNameB(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:ring-indigo-600 focus:text-gray-900 focus:border-indigo-500 sm:text-sm"
                />
            <label htmlFor="playlistImageB" className="block font-medium"></label>
              <input
                id="playlistImageB"
                type="text"
                name="playlistImageB"
                placeholder="Enter Playlist Image Address"
                value={playlistImageB}
                onChange={(e) => setPlaylistImageB(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900  focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
              />
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <label htmlFor="BplaylistRestaurantImage1" className="block font-medium"></label>
                <input
                  id="BplaylistRestaurantImage1"
                  type="text"
                  name="BplaylistRestaurantImage1"
                  placeholder="Enter Playlist Image"
                  value={BplaylistRestaurantImage1}
                  onChange={(e) => BsetPlaylistRestaurantImage1(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className='flex flex-col p-1 hover:text-gray-500'>
              <div className='text-md '>
                <label htmlFor="BplaylistRestaurant1" className="block font-medium"></label>
                  <input
                    id="BplaylistRestaurant1"
                    type="text"
                    name="BplaylistRestaurant1"
                    placeholder="Enter Restaurant Name"
                    value={BplaylistRestaurant1}
                    onChange={(e) => BsetPlaylistRestaurant1(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                  />
              </div>
              <div className='text-sm'>
                <label htmlFor="BplaylistAddress1" className="block font-medium"></label>
                    <input
                      id="BplaylistAddress1"
                      type="text"
                      name="BplaylistAddress1"
                      placeholder="Enter Restaurant Image"
                      value={BplaylistAddress1}
                      onChange={(e) => BsetPlaylistAddress1(e.target.value)}
                      className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="BplaylistRestaurantImage2" className="block font-medium"></label>
                  <input
                    id="BplaylistRestaurantImage2"
                    type="text"
                    name="BplaylistRestaurantImage2"
                    placeholder="Enter Restaurant Image"
                    value={BplaylistRestaurantImage2}
                    onChange={(e) => BsetPlaylistRestaurantImage2(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="BplaylistRestaurant2" className="block font-medium"></label>
                    <input
                      id="BplaylistRestaurant2"
                      type="text"
                      name="BplaylistRestaurant2"
                      placeholder="Enter Restaurant Name"
                      value={BplaylistRestaurant2}
                      onChange={(e) => BsetPlaylistRestaurant2(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                    />
              </div>
              <div className='text-sm'>
                <label htmlFor="BplaylistAddress2" className="block font-medium"></label>
                      <input
                        id="BplaylistAddress2"
                        type="text"
                        name="BplaylistAddress2"
                        placeholder="Enter Restaurant Address"
                        value={BplaylistAddress2}
                        onChange={(e) => BsetPlaylistAddress2(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="BplaylistRestaurantImage3" className="block font-medium"></label>
                    <input
                      id="BplaylistRestaurantImage3"
                      type="text"
                      name="BplaylistRestaurantImage3"
                      placeholder="Enter Restaurant Image"
                      value={BplaylistRestaurantImage3}
                      onChange={(e) => BsetPlaylistRestaurantImage3(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />  
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="BplaylistRestaurant3" className="block font-medium"></label>
                      <input
                        id="BplaylistRestaurant3"
                        type="text"
                        name="BplaylistRestaurant3"
                        placeholder="Enter Restaurant Name"
                        value={BplaylistRestaurant3}
                        onChange={(e) => BsetPlaylistRestaurant3(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                      />
              </div>
              <div className='text-sm'>
                <label htmlFor="BplaylistAddress3" className="block font-medium"></label>
                      <input
                        id="BplaylistAddress3"
                        type="text"
                        name="BplaylistAddress3"
                        placeholder="Enter Restaurant Address"
                        value={BplaylistAddress3}
                        onChange={(e) => BsetPlaylistAddress3(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange '>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="BplaylistRestaurantImage4" className="block font-medium"></label>
                    <input
                      id="BplaylistRestaurantImage4"
                      type="text"
                      name="BplaylistRestaurantImage4"
                      placeholder="Enter Restaurant Image"
                      value={BplaylistRestaurantImage4}
                      onChange={(e) => BsetPlaylistRestaurantImage4(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="BplaylistRestaurant4" className="block font-medium"></label>
                        <input
                          id="BplaylistRestaurant4"
                          type="text"
                          name="BplaylistRestaurant4"
                          placeholder="Enter Restaurant Name"
                          value={BplaylistRestaurant4}
                          onChange={(e) => BsetPlaylistRestaurant4(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                        />
              </div>
              <div className='text-sm'>
                <label htmlFor="BplaylistAddress4" className="block font-medium"></label>
                      <input
                        id="BplaylistAddress4"
                        type="text"
                        name="BplaylistAddress4"
                        placeholder="Enter Restaurant Address"
                        value={BplaylistAddress4}
                        onChange={(e) => BsetPlaylistAddress4(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg  focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange'>
            <div className='p-6'>
              05
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="BplaylistRestaurantImage5" className="block font-medium"></label>
                    <input
                      id="BplaylistRestaurantImage5"
                      type="text"
                      name="BplaylistRestaurantImage5"
                      placeholder="Enter Restaurant Image"
                      value={BplaylistRestaurantImage5}
                      onChange={(e) => BsetPlaylistRestaurantImage5(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="BplaylistRestaurant5" className="block font-medium"></label>
                        <input
                          id="BplaylistRestaurant5"
                          type="text"
                          name="BplaylistRestaurant5"
                          placeholder="Enter Restaurant Name"
                          value={BplaylistRestaurant5}
                          onChange={(e) => BsetPlaylistRestaurant5(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                        />
              </div>
              <div className='text-sm'>
                <label htmlFor="BplaylistAddress5" className="block font-medium"></label>
                      <input
                        id="BplaylistAddress5"
                        type="text"
                        name="BplaylistAddress5"
                        placeholder="Enter Restaurant Address"
                        value={BplaylistAddress5}
                        onChange={(e) => BsetPlaylistAddress5(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          {/*submit form*/}
         
          <button type='submit' className="flex justify-center items-center relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white"
            onClick={handleAddFalseB}>
            Submit
          </button>
          </form>


        </div>
      </div>


     
    ) : null }
    { expandedViewB ? (


      <div className="border rounded-xl mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            {playlistNameB}
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <img src={BplaylistRestaurantImage1} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {BplaylistRestaurant1}
              </div>
              <div className='text-sm'>
                {BplaylistAddress1}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <img src={BplaylistRestaurantImage2} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {BplaylistRestaurant2}
              </div>
              <div className='text-sm'>
                {BplaylistAddress2}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <img src={BplaylistRestaurantImage3} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {BplaylistRestaurant3}
              </div>
              <div className='text-sm'>
                {BplaylistAddress3}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <img src={BplaylistRestaurantImage4} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {BplaylistRestaurant4}
              </div>
              <div className='text-sm'>
                {BplaylistAddress4}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              05
            </div>
            <div className='p-2 mt-1'>
              <img src={BplaylistRestaurantImage5} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {BplaylistRestaurant5}
              </div>
              <div className='text-sm'>
                {BplaylistAddress5}
              </div>
            </div>
          </div>

        </div>

      </div>
    ) : null }

    {/* C PLAYLIST */}
    {addC ? (
      <div className="border rounded-xl mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
        <form onSubmit={submitPlaylistForm}>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            <label htmlFor="playlistNameC" className="block font-medium"></label>
                <input
                  id="playlistNameC"
                  type="text"
                  name="playlistNameC"
                  placeholder="Enter Playlist Name"
                  value={playlistNameC}
                  onChange={(e) => setPlaylistNameC(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:ring-indigo-600 focus:text-gray-900 focus:border-indigo-500 sm:text-sm"
                />
            <label htmlFor="playlistImageC" className="block font-medium"></label>
              <input
                id="playlistImageC"
                type="text"
                name="playlistImageC"
                placeholder="Enter Playlist Image Address"
                value={playlistImageC}
                onChange={(e) => setPlaylistImageC(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900  focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
              />
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <label htmlFor="CplaylistRestaurantImage1" className="block font-medium"></label>
                <input
                  id="CplaylistRestaurantImage1"
                  type="text"
                  name="CplaylistRestaurantImage1"
                  placeholder="Enter Playlist Image"
                  value={CplaylistRestaurantImage1}
                  onChange={(e) => CsetPlaylistRestaurantImage1(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className='flex flex-col p-1 hover:text-gray-500'>
              <div className='text-md '>
                <label htmlFor="CplaylistRestaurant1" className="block font-medium"></label>
                  <input
                    id="CplaylistRestaurant1"
                    type="text"
                    name="CplaylistRestaurant1"
                    placeholder="Enter Restaurant Name"
                    value={CplaylistRestaurant1}
                    onChange={(e) => CsetPlaylistRestaurant1(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                  />
              </div>
              <div className='text-sm'>
                <label htmlFor="CplaylistAddress1" className="block font-medium"></label>
                    <input
                      id="CplaylistAddress1"
                      type="text"
                      name="CplaylistAddress1"
                      placeholder="Enter Restaurant Image"
                      value={CplaylistAddress1}
                      onChange={(e) => CsetPlaylistAddress1(e.target.value)}
                      className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="CplaylistRestaurantImage2" className="block font-medium"></label>
                  <input
                    id="CplaylistRestaurantImage2"
                    type="text"
                    name="CplaylistRestaurantImage2"
                    placeholder="Enter Restaurant Image"
                    value={CplaylistRestaurantImage2}
                    onChange={(e) => CsetPlaylistRestaurantImage2(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                  />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="CplaylistRestaurant2" className="block font-medium"></label>
                    <input
                      id="CplaylistRestaurant2"
                      type="text"
                      name="CplaylistRestaurant2"
                      placeholder="Enter Restaurant Name"
                      value={CplaylistRestaurant2}
                      onChange={(e) => CsetPlaylistRestaurant2(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                    />
              </div>
              <div className='text-sm'>
                <label htmlFor="CplaylistAddress2" className="block font-medium"></label>
                      <input
                        id="CplaylistAddress2"
                        type="text"
                        name="CplaylistAddress2"
                        placeholder="Enter Restaurant Address"
                        value={CplaylistAddress2}
                        onChange={(e) => CsetPlaylistAddress2(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="CplaylistRestaurantImage3" className="block font-medium"></label>
                    <input
                      id="CplaylistRestaurantImage3"
                      type="text"
                      name="CplaylistRestaurantImage3"
                      placeholder="Enter Restaurant Image"
                      value={CplaylistRestaurantImage3}
                      onChange={(e) => CsetPlaylistRestaurantImage3(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />  
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="CplaylistRestaurant3" className="block font-medium"></label>
                      <input
                        id="CplaylistRestaurant3"
                        type="text"
                        name="CplaylistRestaurant3"
                        placeholder="Enter Restaurant Name"
                        value={CplaylistRestaurant3}
                        onChange={(e) => CsetPlaylistRestaurant3(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                      />
              </div>
              <div className='text-sm'>
                <label htmlFor="CplaylistAddress3" className="block font-medium"></label>
                      <input
                        id="CplaylistAddress3"
                        type="text"
                        name="CplaylistAddress3"
                        placeholder="Enter Restaurant Address"
                        value={CplaylistAddress3}
                        onChange={(e) => CsetPlaylistAddress3(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange '>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="CplaylistRestaurantImage4" className="block font-medium"></label>
                    <input
                      id="CplaylistRestaurantImage4"
                      type="text"
                      name="CplaylistRestaurantImage4"
                      placeholder="Enter Restaurant Image"
                      value={CplaylistRestaurantImage4}
                      onChange={(e) => CsetPlaylistRestaurantImage4(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="CplaylistRestaurant4" className="block font-medium"></label>
                        <input
                          id="CplaylistRestaurant4"
                          type="text"
                          name="CplaylistRestaurant4"
                          placeholder="Enter Restaurant Name"
                          value={CplaylistRestaurant4}
                          onChange={(e) => CsetPlaylistRestaurant4(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                        />
              </div>
              <div className='text-sm'>
                <label htmlFor="CplaylistAddress4" className="block font-medium"></label>
                      <input
                        id="CplaylistAddress4"
                        type="text"
                        name="CplaylistAddress4"
                        placeholder="Enter Restaurant Address"
                        value={CplaylistAddress4}
                        onChange={(e) => CsetPlaylistAddress4(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg  focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange'>
            <div className='p-6'>
              05
            </div>
            <div className='p-2 mt-1'>
              <label htmlFor="CplaylistRestaurantImage5" className="block font-medium"></label>
                    <input
                      id="CplaylistRestaurantImage5"
                      type="text"
                      name="CplaylistRestaurantImage5"
                      placeholder="Enter Restaurant Image"
                      value={CplaylistRestaurantImage5}
                      onChange={(e) => CsetPlaylistRestaurantImage5(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                    />
            </div>
            <div className='flex flex-col p-1'>
              <div className='text-md'>
                <label htmlFor="CplaylistRestaurant5" className="block font-medium"></label>
                        <input
                          id="CplaylistRestaurant5"
                          type="text"
                          name="CplaylistRestaurant5"
                          placeholder="Enter Restaurant Name"
                          value={CplaylistRestaurant3}
                          onChange={(e) => CsetPlaylistRestaurant5(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-gray-800 border-2 rounded-xl focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm mb-1"
                        />
              </div>
              <div className='text-sm'>
                <label htmlFor="CplaylistAddress5" className="block font-medium"></label>
                      <input
                        id="CplaylistAddress5"
                        type="text"
                        name="CplaylistAddress5"
                        placeholder="Enter Restaurant Address"
                        value={CplaylistAddress5}
                        onChange={(e) => CsetPlaylistAddress5(e.target.value)}
                        className="w-full px-3 bg-white border border-gray-800 border-2 rounded-lg focus:outline-none focus:text-gray-900 focus:ring-indigo-600 focus:border-indigo-500 sm:text-sm"
                      />
              </div>
            </div>
          </div>


          {/*submit form*/}
         
          <button type='submit' className="flex justify-center items-center relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white"
            onClick={handleAddFalseC}>
            Submit
          </button>
          </form>


        </div>
      </div>     
    ) : null }

    { expandedViewC ? (

      <div className="border rounded-xl mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            {playlistNameC}
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <img src={CplaylistRestaurantImage1} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {CplaylistRestaurant1}
              </div>
              <div className='text-sm'>
                {CplaylistAddress1}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <img src={CplaylistRestaurantImage2} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {CplaylistRestaurant2}
              </div>
              <div className='text-sm'>
                {CplaylistAddress2}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <img src={CplaylistRestaurantImage3} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {CplaylistRestaurant3}
              </div>
              <div className='text-sm'>
                {CplaylistAddress3}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <img src={CplaylistRestaurantImage4} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {CplaylistRestaurant4}
              </div>
              <div className='text-sm'>
                {CplaylistAddress4}
              </div>
            </div>
          </div>


          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-xl hover:bg-orange hover:text-white'>
            <div className='p-6'>
              05
            </div>
            <div className='p-2 mt-1'>
              <img src={CplaylistRestaurantImage5} alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                {CplaylistRestaurant5}
              </div>
              <div className='text-sm'>
                {CplaylistAddress5}
              </div>
            </div>
          </div>

        </div>

      </div>


    ) : null }

    </div>
  )
}

export default Playlists