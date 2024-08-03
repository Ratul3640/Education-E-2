import balp from "../../../public/balp.png";
import stand from "../../../public/stand.png";
import Student from "../../../public/Student.png";
import Student2 from "../../../public/Student2.png";
import Student3 from "../../../public/Student3.png";
import rating from "../../../public/rating.png";
import tk from "../../../public/tk.png";
import time from "../../../public/time.png";

const Tracks = () => {
    return (
        <>
            <div className="w-svw md:w-auto  ">
                <div className="flex flex-wrap lg:justify-between gap-56">
                    <div>
                        <img src={balp} alt="" />
                    </div>
                    <div>
                        <img src={stand} alt="" />
                    </div>
                </div>

                <div className="-mt-36">
                    <h1 className="lg:text-6xl text-3xl font-bold lg:font-bold my-2">
                        Our Tracks
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>

                <div className="my-16  gap-4 flex flex-wrap -lg:ml-20 ml-28">
                    <div className="w-72 md:w-96 lg:w-80 h-86 p-4  rounded ml-2 bg-gray-200 my-10">
                        <div className="">
                            <img src={Student} alt="" />
                        </div>
                        <div className="flex justify-between my-2">
                            <div>
                                <p>Mern struck</p>
                            </div>
                            <div>
                                <img src={rating} alt="" />
                            </div>
                        </div>
                        <div className="my-2">
                            <img src={tk} alt="" />
                        </div>
                        <hr className="" />
                        <div className="pb-4">
                            <img src={time} alt="" />
                        </div>
                        <div className="mr-[25%] -mb-10 ml-24 md:ml-42 lg:ml-24">
                            <button className="btn  mr-96 bg-orange-500 rounded-lg">
                                Join Course
                            </button>
                        </div>
                    </div>
                    <div className="w-72 md:w-96 h-86 p-4 rounded lg:w-80 bg-gray-200 my-10">
                        <div className="">
                            <img src={Student2} alt="" />
                        </div>
                        <div className="flex justify-between my-2">
                            <div>
                                <p>Mern struck</p>
                            </div>
                            <div>
                                <img src={rating} alt="" />
                            </div>
                        </div>
                        <div className="my-2">
                            <img src={tk} alt="" />
                        </div>
                        <hr className="" />
                        <div className="pb-4">
                            <img src={time} alt="" />
                        </div>
                        <div className="mr-[25%] -mb-10 ml-24 md:ml-42 lg:ml-24">
                            <button className="btn  mr-96 bg-orange-500 rounded-lg">
                                Join Course
                            </button>
                        </div>
                    </div>
                    <div className="w-72 md:w-96 h-86 p-4 lg:w-80 rounded bg-gray-200 my-10">
                        <div className="">
                            <img src={Student3} alt="" />
                        </div>
                        <div className="flex justify-between my-2">
                            <div>
                                <p>Mern struck</p>
                            </div>
                            <div>
                                <img src={rating} alt="" />
                            </div>
                        </div>
                        <div className="my-2">
                            <img src={tk} alt="" />
                        </div>
                        <hr className="" />
                        <div className="pb-4">
                            <img src={time} alt="" />
                        </div>
                        <div className="mr-[25%] -mb-10 ml-24 md:ml-42 lg:ml-24">
                            <button className="btn  mr-96 bg-orange-500 rounded-lg">
                                Join Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tracks;
