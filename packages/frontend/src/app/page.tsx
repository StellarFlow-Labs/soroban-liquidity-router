export default function SwapPage() {
  return (
    <main className="w-full max-w-md p-6 bg-slate-800 rounded-2xl shadow-xl border border-slate-700">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-blue-400">StellarFlow</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg font-medium transition-colors">
          Connect Wallet
        </button>
      </header>

      {/* MOCK EXECUTION: This UI is currently static. */}
      {/* GOOD FIRST ISSUE TODO: 
          1. Connect Freighter Wallet using @stellar/freighter-api.
          2. Import the @stellarflow/sdk to fetch actual token balances.
          3. Wire up the input fields to calculate routes and execute the swap on-chain. 
      */}

      <div className="space-y-4">
        {/* You Pay Section */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 focus-within:border-blue-500 transition-colors">
          <label className="block text-xs text-slate-400 mb-2">You Pay</label>
          <div className="flex justify-between items-center">
            <input 
              type="number" 
              placeholder="0.0" 
              className="bg-transparent text-2xl outline-none w-2/3"
            />
            <select className="bg-slate-800 border border-slate-600 rounded-lg p-2 outline-none cursor-pointer">
              <option>XLM</option>
              <option>USDC</option>
            </select>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center -my-2 relative z-10">
          <div className="bg-slate-700 p-2 rounded-full border-4 border-slate-800">
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* You Receive Section */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 focus-within:border-blue-500 transition-colors">
          <label className="block text-xs text-slate-400 mb-2">You Receive</label>
          <div className="flex justify-between items-center">
            <input 
              type="number" 
              placeholder="0.0" 
              readOnly
              className="bg-transparent text-2xl outline-none w-2/3 text-slate-400"
            />
            <select className="bg-slate-800 border border-slate-600 rounded-lg p-2 outline-none cursor-pointer">
              <option>USDC</option>
              <option>XLM</option>
            </select>
          </div>
        </div>

        <button disabled className="w-full mt-4 bg-slate-700 text-slate-400 font-bold py-4 rounded-xl cursor-not-allowed">
          Enter an amount
        </button>
      </div>
    </main>
  );
}