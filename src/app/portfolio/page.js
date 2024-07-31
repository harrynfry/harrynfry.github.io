import TicTacToe from "../components/TicTacToe";

const PortfolioPage = () => {
    return( 
        <div className="flex flex-col items-center font-mono"> 

            <div className="bg-grey text-black text-center py-2 border border-black bg-opacity-70 flex justify-center w-3/4 rounded-lg mx-auto"> 
                <p className="py-2 text-center text-xl">
                    Under construction... Check back to view all of my completed case studies and projects.
                </p>                
            </div>

            <div className="w-3/4 mx-auto">    
                <p className="py-4 text-center text-xl">
                    Check out my dissertation below, where I looked at improving communication sentiment between my local council announcements and borough residents.
                </p>

                <div className="py-4  text-center underline hover:italic hover:font-bold hover:no-underline text-xl hover:text-shadow pb-8">
                    <a href="/docs/Dissertation Report.pdf" target="_blank" rel="noopener noreferrer" download={"HarryFryDissertation"}>
                    Download my Dissertation!
                    </a>
                </div>

                <p className="text-center text-xl">
                    In the meantime, have a game of TicTacToe.
                </p>
            </div>

            <div className="px-16 py-8 w-3/4 mx-auto">
                <TicTacToe/>
            </div>
        </div>
    )
}

PortfolioPage.displayName = 'PortfolioPage';

export default PortfolioPage;
