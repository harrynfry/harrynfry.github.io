import TicTacToe from "../components/TicTacToe";

const PortfolioPage = () => {
    return( 
        <div>
            <div className="px-16 pt-6 font-mono">      
                <p className="text-center text-xl">
                    Under construction... Check back to view my completed case studies and projects.
                </p>

                <div className="px-16 pt-10 font-mono text-center underline hover:italic hover:font-bold hover:no-underline text-xl hover:text-shadow pb-8">
                    <a href="/docs/Dissertation Report.pdf" target="_blank" rel="noopener noreferrer" download={"HarryFryDissertation"}>
                    Download my Dissertation!
                    </a>
                </div>

                <p className="text-center text-xl">
                    In the meantime, have a game of TicTacToe.
                </p>
            </div>

            <div className="px-16 pt-6 font-mono">
                <p className="text-center text-xl">
                    Play a game        
                </p>
                <TicTacToe/>
            </div>


        </div>

        
        
    )
}

PortfolioPage.displayName = 'PortfolioPage';

export default PortfolioPage;