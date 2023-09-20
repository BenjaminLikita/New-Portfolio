import {FaLinkedin} from "react-icons/fa6"
import {MdDownload} from "react-icons/md"

function Resume() {
  return (
    <div className='bg-white w-[100vw] h-[100vh] flex'>
      <div className='bg-gray-50 m-32'>
        <div className="w-[100%] bg-red-500">
            <FaLinkedin />
            <div className="flex items-center gap-2">
                <MdDownload />
                <p>Download</p>
            </div>

        </div>
        <div className='flex'>
            <div>
            </div>
            <div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
