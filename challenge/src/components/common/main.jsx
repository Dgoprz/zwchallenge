export const Main = ({ className="", children, mainBackground }) => {

    let backgroundColor = '';

    switch (mainBackground) {
        case 'white':
            backgroundColor = '#FFFFFF'
            break;
        case 'gray':
            backgroundColor = '#F7F9FA'
            break;
        case 'black':
                backgroundColor = '#000000'
                break;
        default:
            backgroundColor = mainBackground;
            break;
    }

    return (<main style={{ backgroundColor: backgroundColor }} >
        <div className={`container ${className}`}>
            {children}
        </div>

    </main>)
}