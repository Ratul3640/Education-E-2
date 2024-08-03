import Study from '../../../public/Study.png'
import Love from '../../../public/Love.png'
import Fun from '../../../public/Fun.png'

const Learning = () => {
    return (
        <div className='bg-orange-100 mx-auto w-auto h-auto lg:flex gap-28 '>
            <div className='pl-8 relative '>
                <img className='lg:w-[600px] w-[300px]' src={Study} alt="" />
            </div>
            <div className='my-40 ml-24 pb-6'> 
                <div>
                    <h1 className='lg:text-6xl text-3xl  md:text-start text-start font-semibold '>
                        Premium <span className='text-orange-500'>Learning </span>
                        Experience
                    </h1>
                </div>
                <div className='flex my-6 gap-4'>
                    <div>
                        <img src={Love} alt="" />
                   </div>
                    <div>
                        <h6 className='text-xl text-[0.99rem] font-semibold md:text-start text-start'>Easily Accessible</h6>
                        <p className='text-[0.80rem] '>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>
                <div className='flex my-6 gap-4'>
                    <div>
                        <img src={Fun} alt="" />
                   </div>
                    <div>
                        <h6 className='text-xl font-semibold md:text-start text-[0.99rem]  text-start'>Fun learning expe</h6>
                        <p className='text-[0.80rem]  '>Learning Will fell Very Comfortable With Courslab.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;