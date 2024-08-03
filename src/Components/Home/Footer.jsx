import Book from "../../../public/Book.png"



const Footer = () => {
    return (
        <div className="h-auto md:h-[40vh] rounded w-2/2 mx-auto bg-orange-200 md:text-start text-start w-svw md:w-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-around py-24">
                <div className="flex gap-2 text-center mr-12">
                    <div >
                        <div className="flex gap-2 my-2 mr-4">
                            <div>
                                <img src={Book} alt="" />
                            </div>
                            <div className="text-lg font-semibold mt-3 text-blue-500 ">Book Store
                            </div>
                        </div>
                        <p className="text-[10px]">Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. <br /> Lorem Ipsum has been the industrys <br /> standard dummy a type specimen book.</p>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div>
                        <div>
                            <h1 className="text-lg font-semibold mt-3 text-blue-500 ">Company</h1>
                        </div>
                        <div className="text-gray-600">
                            <p>About Us</p>
                            <p>Service</p>
                            <p>How to work?</p>
                            <p>Populer Course</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-lg font-semibold mt-3 text-blue-500 ">Courses</h1>
                        </div>
                        <div className="text-gray-600">
                            <p>Categories </p>
                            <p>Ofline Course</p>
                            <p>Carrer</p>
                            <p>Vidio Course</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-lg font-semibold mt-3 text-blue-500 ">Support  </h1>
                        </div>
                        <div className="text-gray-600">
                            <p>FAQ</p>
                            <p>Help Center</p>
                            <p>Populer Course</p>
                            <p>Privacy </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-lg font-semibold mt-3 text-blue-500 ">Contac Info  </h1>
                        </div>
                        <div className="text-gray-600">
                            <p>+01316021454</p>
                            <p>nahanurislam71@gmail.com</p>
                            <p>Naogaon,Rajshahi
                            </p>
                            <p>Dhaka,Bangladesh </p>
                        </div>
                    </div>

                </div>

            </div>
            <p className="-mt-10 text-center">BookStore All Right Reserved@ 2024</p>
        </div>
    );
};

export default Footer;