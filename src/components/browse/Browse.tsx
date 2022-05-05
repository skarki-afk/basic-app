
import Main from './Main';

interface Props {
    darkMode: boolean
}

function Browse({darkMode}:Props) {
    return(
     
      <div className='flex justify-center'>
        <div className={`w-screen sm:w-80 md:w-96 lg:w-96 ${darkMode? "bg-black text-white" : ""} dark:bg-black dark:text-white`}>
          <Main
          darkMode = {darkMode}
          />
        </div>
      </div>
    )
}


export default Browse;
