import TicTacToe from "../components/TicTacToe";

const PortfolioPage = () => {
    return( 

        <div className="px-16 pt-6 font-mono">
        <p className="text-center text-xl">
Play a game        </p>
        <TicTacToe/>
        </div>

        
    )
}

PortfolioPage.displayName = 'PortfolioPage';

export default PortfolioPage;