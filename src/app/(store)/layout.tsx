import { Header } from '@app/components/header/page'
import { ReactNode, Suspense } from 'react'
import { CartProvider } from '@app/contexts/cart-context'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Suspense>
          <Header />
          {children}
        </Suspense>
      </div>
    </CartProvider>
  )
}
