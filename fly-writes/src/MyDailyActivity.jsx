const MyDailyActivity = () => {
    return (
        <section className="relative max-w-screen-lg mx-auto p-8 sm:p-8 my-8 border-2 custom-border">
            <span className="absolute -top-3 left-4 sm:left-6 px-2 font-mono text-grey bg-black">
            what I did today
            </span>
            <div className="flex-1">
                <p className="text-white text-opacity-80"> locked in, but no proof yet...</p>
            </div>
        </section>
    );
}


export default MyDailyActivity; // Make sure to have this line
