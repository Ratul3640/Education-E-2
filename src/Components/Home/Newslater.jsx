import stand from '../../../public/stand.png'
import balp from '../../../public/balp.png'

const Newslater = () => {
    return (
        <div className='w-svw md:w-auto'>
            <div className='h-[50vh] rounded w-2/2 mx-auto bg-indigo-900 my-20'>
                <h1 className="text-5xl text-center pt-28 text-white font-semibold ">Subscribe to our newsletter</h1>
                <p className=" text-white">Lorem Ipsum is simply dummy text of the printing.</p>
                <div className="my-6 flex gap-2  justify-center">
                    <div>
                        <input className='bg-white-400 px-8 rounded-lg py-2' type="text" placeholder='Email Address ' required />
                    </div>
                    <div >
                        <button className="bg-orange-500 px-4 py-2  rounded-sm text-white  ">send</button>
                    </div>
                </div>

            </div>
            <div className='flex justify-between -mt-56'>
                <div>
                    <img src={balp} alt="" />
                </div>
                <div>
                    <img src={stand} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Newslater;