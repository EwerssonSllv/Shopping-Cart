export function Cart() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Shopping Cart</h1>


            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img className="w-28 " src="https://imgs.pontofrio.com.br/1568461132/1xg.jpg?imwidth=500" alt="Product" />

                <strong>Price: 2,700.00</strong>

                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2  rounded text-white font-medium flex items-center justify-center">-</button>
                    
                    3
                    
                    <button className="bg-slate-600 px-2  rounded text-white font-medium flex items-center justify-center">+</button>
                </div>

                <strong className="float-right">Total: R$ 8,100</strong>
            </section>

            <p className="font-bold mt-4">Total: 8,100</p>
        </div>
    )
}