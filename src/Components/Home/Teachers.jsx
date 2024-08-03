import Teacher from '../../../public/Teacher.png'
import Teacher2 from '../../../public/Teacher2.png'
import Teacher3 from '../../../public/Teacher3.png'
import engineer from '../../../public/engineer.png'
import linkin from '../../../public/linkin.png'
import instagram from '../../../public/instagram.png'

const Teachers = () => {
    return (
        <>
            <div className='w-svw md:w-auto'>
                <div>
                    <div>
                        <h1 className="text-center font-semibold text-6xl"> Our Teachers</h1>
                        <p className="my-4">Lorem Ipsum is simply dummy text of the printing. </p>
                    </div>

                </div>
                <div className=' gap-4 md:text-start text-start grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center '>
                    <div className='w-96 h-86 p-4 rounded bg-gray-200 my-10'>
                        <div>
                            <img src={Teacher} alt="" />
                        </div>
                        <div >
                            <h1 className="text-xl  font-semibold my-2"> Matthew E. McNatt</h1>
                            <p className="text-gray-400">Professor @George Brown College</p>
                            <p className="text-gray-400 my-2"> Ut enim ad minim veniam, quis nost exercitation <br />
                                ullamco laboris nisi ut allquip ex commodo.</p>
                        </div>
                        <div className="flex my-2 justify-between">
                            <div>
                                <img src={engineer} alt="" />

                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src={linkin} alt="" />
                                </div>
                                <div>
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 h-86 p-4 rounded bg-gray-200 my-10'>
                        <div>
                            <img src={Teacher2} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold my-2"> Tracy D. Wright</h1>
                            <p className="text-gray-400">Professor @George Brown College</p>
                            <p className="text-gray-400 my-2"> Ut enim ad minim veniam, quis nost exercitation <br />
                                ullamco laboris nisi ut allquip ex commodo.</p>
                        </div>
                        <div className="flex my-2 justify-between">
                            <div>
                                <img src={engineer} alt="" />

                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src={linkin} alt="" />
                                </div>
                                <div>
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 h-86 p-4 rounded bg-gray-200 my-10'>
                        <div>
                            <img src={Teacher3} alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold my-2">Cynthia A. Nelson</h1>
                            <p className="text-gray-400">Professor @George Brown College</p>
                            <p className="text-gray-400 my-2"> Ut enim ad minim veniam, quis nost exercitation <br />
                                ullamco laboris nisi ut allquip ex a commodo.</p>
                        </div>
                        <div className="flex my-2 justify-between">
                            <div>
                                <img src={engineer} alt="" />

                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <img src={linkin} alt="" />
                                </div>
                                <div>
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Teachers;



