import { CartCounter } from "@/app/shopping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Counter Page',
 description: 'Counter Page Description',
};
export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-sky-950">
      <h1 className="text-xl font-light">Productos en el carrito</h1>
      <CartCounter value={20}/>
    </div>
  );
}