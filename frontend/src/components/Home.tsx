import Notification from "../assets/notification.png";
import Setting from "../assets/setting.png";
import Help from "../assets/help.png";
import Message from "../assets/message.png";
import Avatar from "../assets/image.png";
export default function Home() {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="flex items-center justify-center gap-32">
        <div className="relative h-12 w-[614px] rounded-md bg-transparent   bg-white">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search your course"
            aria-label="search"
            className="h-full w-full pl-10 pr-4 bg-transparent text-black placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          <img src={Help} alt="help" className="h-6 w-6" />
          <img src={Message} alt="message" className="h-6 w-6" />
          <img src={Setting} alt="setting" className="h-6 w-6" />
          <img src={Notification} alt="notification" className="h-6 w-6" />
          <div className="flex items-center">
            <img src={Avatar} alt="avatar" className="h-12 w-12 mr-4" />
            <span>Adeline H. Dancy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
