import { useRouter } from "next/router";
import React from "react";
import FileBase64 from "react-file-base64";
import { useStateContext } from "../context/StateContext";

const Form = () => {
  const router = useRouter();
  const {
    userimageUrl,
    setUserImageUrl,
    crushimageUrl,
    setCrushImageUrl,
    username,
    setUserName,
    crushname,
    setCrushName,
  } = useStateContext();
  const goChat = () => {
    if ((username == null) | (crushname == null)) return;
    router.push("/chat");
  };
  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome
            </h2>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Your Name
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter Your Name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span>YourPic</span>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => setUserImageUrl(base64)}
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        for=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Your Crush Name{" "}
                      </label>
                    </div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="text"
                        onChange={(e) => setCrushName(e.target.value)}
                        placeholder="Enter your crush name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span>YourCrushPic</span>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => setCrushImageUrl(base64)}
                    />
                  </div>

                  <div>
                    <button
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      onClick={() => goChat()}
                    >
                      Go Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
