import Profile from '../images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-20 my-3 p-2 border-b-2 '>
            <h1 className=" text-4xl text-orange-300 font-bold  ">
                Knowledge Cafe
            </h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;