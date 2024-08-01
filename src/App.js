import { useEffect, useState } from "react";

import OrderTracking from "./components/OrderTraking";


const App = () => {


  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 text-white">
     <OrderTracking />
  </div>
  );
};

export default App;