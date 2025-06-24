// components/StudentIDCard.tsx
import Image from "next/image";

export default function StudentIDCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-[600px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
        {/* Header */}
        <div className="relative h-24 bg-white">
          <div className="absolute top-0 left-0 w-full h-20 bg-green-700 clip-angle-small" />

          <div className="relative z-10 flex items-center justify-center px-6 h-full">
            {/* <div className="text-black font-bold text-lg flex items-center gap-2">
              {/* <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3 4h18v2H3V4zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
              </svg> */}
            {/* <span className="text-black font-extrabold text-lg uppercase">
                AIOU
              </span>
            </div> */}
            <div className="text-black text-sm font-semibold uppercase">
              Allama Iqbal Open University Islamabad
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-row p-6">
          {/* Background Logo Watermark - positioned first and subtle */}
          <div className="absolute inset-0 flex items-center justify-center opacity-100 pointer-events-none mb-10">
            <Image
              src="/image/aiou-logo.jpg"
              alt="AIOU Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Left Side - Info */}
          <div className="relative z-10 w-2/3 text-sm space-y-2">
            <h2 className="text-black font-extrabold text-xl mb-3">
              STUDENT ID CARD
            </h2>
            <div className="text-black">
              <span className="font-bold">NAME</span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Ammar Ali
            </div>
            <div className="text-black">
              <span className="font-bold ">ID</span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              : AIOU-0000949767
            </div>
            <div className="text-black">
              <span className="font-bold ">D.O.B</span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 07/11/2003
            </div>
            <div className="text-black">
              <span className="font-bold ">ADDRESS</span> : Neelum Valley AJK
              Pakistan
            </div>

            {/* Barcode */}
          </div>

          {/* Right Side - Photo */}
          <div className="relative z-10 w-1/3 flex justify-end items-start">
            <div className="border-4 border-green-800 p-1">
              <Image
                src="/image/ammar.jpg" // Add student photo to /public
                alt="Student Photo"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
