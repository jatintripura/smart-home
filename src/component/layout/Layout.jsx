import { BsLightbulbFill } from "react-icons/bs";
import { FaFan } from "react-icons/fa6";
import { useState } from "react";

const Layout = () => {
  const [bedRoomLight, setbedRoomLight] = useState(false);
  const [studyRoomLight, setstudyRoomLight] = useState(false);
  const [studyRoomFan, setstudyRoomFan] = useState(false);
  const [bedRoomFan, setbedRoomFan] = useState(false);

  const handlebedRoomLight = async () => {
    console.log("bed romm");
    const response = await fetch("http://localhost:4000/bedRoomLight");
    const data = await response.json();
    setbedRoomLight(data.status === "ON" ? true : false);
    console.log(data);
  };
  const handlestudyRoomLight = async () => {
    const response = await fetch("http://localhost:4000/studyRoomLight");
    const data = await response.json();
    setstudyRoomLight(data.status === "ON" ? true : false);
    console.log(data.status);
    console.log(data);
  };
  const handlestudyRoomFan = async () => {
    const response = await fetch("http://localhost:4000/studyRoomFan");
    const data = await response.json();
    setstudyRoomFan(data.status === "ON" ? true : false);

    console.log(data);
  };
  const handlebedRoomFan = async () => {
    const response = await fetch("http://localhost:4000/bedRoomFan");
    const data = await response.json();
    setbedRoomFan(data.status === "ON" ? true : false);

    console.log(data);
  };

  return (
    <>
      <div className="bg-[#110f0f] w-full  ">
        <div className="container mx-auto text-white ">
          <div className="text-center pt-12 pb-5">
            <h1 className="text-4xl font-bold capitalize">
              mini
              <span className="text-[#E31C79]"> smart</span> home
            </h1>
          </div>
          <div className="grid  place-content-betweeen place-items-center py-10">
            <div className="text-center p-5">
              <h1 className="text-2xl py-3 capitalize font-medium">
                Control light
              </h1>
              <div className="grid md:grid-cols-2  gap-x-[120px] p-5 rounded-md">
                <div className="grid gap-y-5">
                  <h1 className="text-lg capitalize">
                    study room light status
                    <br />
                    <span className="text-[#E31C79] font-bold">
                      {studyRoomLight ? "ON" : "OFF"}
                    </span>
                  </h1>
                  <div className="flex items-center justify-center">
                    <BsLightbulbFill
                      className={
                        studyRoomLight
                          ? "w-full h-full text-[120px]  p-5 shadow text-white"
                          : "w-full h-full text-[120px]  p-5 text-[#a39797]"
                      }
                    />
                  </div>
                  {/* <div className=" flex items-center justify-center ">
                    <input
                      type="text"
                      className="text-[#212121] outline-none w-1/2 h-full text-center px-10 py-2 rounded-md overflow-hidden"
                    />
                  </div> */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handlestudyRoomLight}
                      className="bg-[#E31C79] px-5 py-2 w-1/2 rounded-sm"
                    >
                      {studyRoomLight ? "Turn off " : "Turn on "}
                    </button>
                  </div>
                </div>
                <div className="grid gap-y-5">
                  <h1 className="text-lg capitalize">
                    bed room light status
                    <br />
                    <span className="text-[#E31C79] font-bold">
                      {bedRoomLight ? "ON" : "OFF"}
                    </span>
                  </h1>
                  <div className="flex items-center justify-center">
                    <BsLightbulbFill
                      className={
                        bedRoomLight
                          ? "w-full h-full text-[120px]  p-5 shadow text-white"
                          : "w-full h-full text-[120px]  p-5 text-[#a39797]"
                      }
                    />
                  </div>
                  {/* <div className=" flex items-center justify-center">
                    <input
                      type="text"
                      className="text-[#212121] outline-none w-1/2 h-full text-center px-10 py-2 rounded-md overflow-hidden"
                    />
                  </div> */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handlebedRoomLight}
                      className="bg-[#E31C79] px-5 py-2 w-1/2 rounded-sm"
                    >
                      {bedRoomLight ? "Turn off " : "Turn on "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center p-5">
              <h1 className="text-2xl py-3 capitalize font-medium">
                Control fan
              </h1>
              <div className="grid md:grid-cols-2  gap-x-20 p-5 rounded-md">
                <div className="grid gap-y-5">
                  <h1 className="text-lg capitalize">
                    study room fan status <br />
                    <span className="text-[#E31C79] font-bold">
                      {studyRoomFan ? "ON" : "OFF"}
                    </span>
                  </h1>
                  <div className="flex items-center justify-center">
                    <FaFan
                      className={
                        studyRoomFan
                          ? "w-full h-full text-[120px]  p-5 animate-spin text-white"
                          : "w-full h-full text-[120px]  p-5 text-[#a39797]"
                      }
                    />
                  </div>
                  {/* <div className=" flex items-center justify-center ">
                    <input
                      type="text"
                      className="text-[#212121] outline-none w-1/2 h-full text-center px-10 py-2 rounded-md overflow-hidden"
                    />
                  </div> */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handlestudyRoomFan}
                      className="bg-[#E31C79] px-5 py-2 w-full rounded-sm"
                    >
                      {bedRoomLight ? "Turn off " : "Turn on "}
                    </button>
                  </div>
                </div>
                <div className="grid gap-y-5">
                  <h1 className="text-lg capitalize">
                    study room fan status <br />
                    <span className="text-[#E31C79] font-bold">
                      {bedRoomFan ? "ON" : "OFF"}
                    </span>
                  </h1>
                  <div className="flex items-center justify-center">
                    <FaFan
                      className={
                        bedRoomFan
                          ? "w-full h-full text-[120px]  p-5 animate-spin text-white"
                          : "w-full h-full text-[120px]  p-5 text-[#a39797]"
                      }
                    />
                  </div>
                  {/* <div className=" flex items-center justify-center ">
                    <input
                      type="text"
                      className="text-[#212121] outline-none w-1/2 h-full text-center px-10 py-2 rounded-md overflow-hidden"
                    />
                  </div> */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handlebedRoomFan}
                      className="bg-[#E31C79] px-5 py-2 w-full rounded-sm"
                    >
                      {bedRoomLight ? "Turn off " : "Turn on "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
