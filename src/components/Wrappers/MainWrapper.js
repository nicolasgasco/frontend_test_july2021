// Wrapper created to give central part of page an even look

const MainWrapper = ({children, className}) => {
    return (
        <main className={` ${className}`}>
            {children}
        </main>
    )
}

export default MainWrapper;