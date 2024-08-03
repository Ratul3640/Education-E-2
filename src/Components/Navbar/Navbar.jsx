import { NavLink } from "react-router-dom";
import Book from "../../../public/Book.png"

const Navbar = () => {
    return (
        <div className="flex  justify-between w-svw md:w-auto">
            <div className="flex gap-2 text-center ">
                <div >
                    <img src={Book} alt="" />
                </div>
                <div className="text-lg font-semibold mt-3 text-blue-500 ">Book Store
                </div>
            </div>
            <div className="flex gap-5 ">
                <NavLink to={'/'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg list-none font-semibold">Home</li>
                </NavLink>
                <NavLink to={'about us'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg list-none font-semibold">Class</li>
                </NavLink>
                <NavLink to={'Courses'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg list-none font-semibold">Courses</li>
                </NavLink>
                <NavLink to={'/our service'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg list-none font-semibold">Teacher</li>
                </NavLink>
                <NavLink to={'/concact us'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
                }>
                    <li className="text-lg list-none font-semibold">About Us</li>
                </NavLink>
            </div>
            <div>
                <button className="btn px-2 py-1 rounded-md bg-blue-900 text-white">Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;





























// import bag from "../../../public/bag.png";
// import search from "../../../public/search.png";
// import Pc from "../../../public/Pc.png";
// import Text from "../../../public/Text.png";
// import exam from "../../../public/exam.png";

// const Banner = () => {
//     return (
//         <>
//             <div className=" justify-center items-center bg-orange-100 my-16 gap-10 w-svw md:w-auto">
//                 <div className="flex flex-col-reverse md:flex-row ml-20 my-10">
//                     <div className="text-center md:text-start items-center my-20  mx-3 md:mx-0">
//                         <h1 className=" text-2xl font-bold py-4">
//                             The <span className="text-orange-500">Smart</span> <br />
//                             Choice For <span className="text-orange-500">Future</span>
//                         </h1>
//                         <p className="text-gray-500 ">
//                             Elearn is a global training provider based across the UK that
//                             specialises in accredited and bespoke training courses. We crush
//                             the...
//                         </p>
//                         <div className="my-6 gap-2 flex justify-center items-center">
//                             <div>
//                                 <input
//                                     className="bg-slate-200 px-3 rounded-lg py-2"
//                                     type="text"
//                                     placeholder="Search for a location..."
//                                 />
//                             </div>
//                             <div>
//                                 {" "}
//                                 <img src={search} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <img src={bag} alt="" className="w-[80vw] h-auto m-auto pt-10" />
//                 </div>
//                 <div className="lg:h-[20vh] h-[18vh]  flex -mb-8 items-center  text-start rounded lg:w-3/4 w-3/3 mx-auto bg-indigo-900 ">
//                     <div className=" flex ml-2 sm:text-start  py-14 gap-2">
//                         <div className="bg-">
//                             <img src={Pc} alt="" />
//                         </div>
//                         <div className="text-white ">
//                             <h5 className="text-xl font-bold mr-10">
//                                 Learn The Latest Skills
//                             </h5>
//                             <p className="text-[0.4rem] mr-16">
//                                 Contrary to popular belief, Lorem Ipsum is <br /> not simply
//                                 random text BC, making it over 2000 years old.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-center py-14 gap-2">
//                         <div>
//                             <img src={Text} alt="" />
//                         </div>
//                         <div className="text-white ">
//                             <h5 className="text-xl font-bold  sm:text-start">
//                                 Get Ready For a Career
//                             </h5>
//                             <p className="text-[0.4rem]  sm:text-start">
//                                 Contrary to popular belief, Lorem Ipsum is <br /> not simply
//                                 random text BC, making it over 2000 years old.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-center mr-2 py-14 gap-2">
//                         <div>
//                             <img src={exam} alt="" />
//                         </div>
//                         <div className="text-white  sm:text-start">
//                             <h5 className="text-xl font-bold  sm:text-start">
//                                 Earn a Certificate
//                             </h5>
//                             <p className="text-[0.4rem]">
//                                 Contrary to popular belief, Lorem Ipsum is <br /> not simply
//                                 random text BC, making it over 2000 years old.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Banner;
