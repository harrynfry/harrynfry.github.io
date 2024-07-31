import TicTacToe from "../components/TicTacToe";

const PortfolioPage = () => {
    return( 
        <div>
            <div className="px-16 pt-6 font-mono">      
                <p className="text-center text-xl">
                    Under construction... Check back to view my completed case studies and projects.
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