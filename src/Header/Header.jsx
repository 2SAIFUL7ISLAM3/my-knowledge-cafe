import Profile from '../images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-around items-center mt-6 '>
            <h1 className=" text-4xl text-black font-bold  ">
                Knowledge Cafe
            </h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;