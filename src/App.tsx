import React, {useRef} from 'react'
import Footer from './demo/components/Footer'
import Header from './demo/components/Header'
import useFocusWithin from './lib/useFocusWithin'

function App() {
   const ref = useRef() as React.RefObject<any>
   const isFocused = useFocusWithin(ref)

   return (
      <div className="container">
         <div className="prose w-full">
            <Header />

            <div className="grid sm:grid-cols-2 gap-5 items-start px-5 py-10">
               <div>
                  <h3>Example</h3>
                  <p className="max-w-[75%]">
                     Tab or place <button>focus</button> into the list of links
                     below. Once focus is moved inside the list, application
                     state will update and return true.
                  </p>
                  <p className="text-sm leading-none">
                     Focused:{' '}
                     <span className="bg-yellow-100 px-2 p-1.5 inline-block rounded text-black">
                        {isFocused ? 'true' : 'false'}
                     </span>
                  </p>
               </div>
               <div
                  className="border-2 border-dashed rounded mb-2.5 px-3 p-1.5"
                  ref={ref}
               >
                  <ul>
                     <li>
                        <a href="/">Link One</a>
                     </li>
                     <li>
                        <a href="/">Link Two</a>
                     </li>
                     <li>
                        <a href="/">Link Three</a>
                     </li>
                     <li>
                        <a href="/">Link Four</a>
                     </li>
                     <li>
                        <a href="/">Link Five</a>
                     </li>
                     <li>
                        <a href="/">Link Six</a>
                     </li>
                  </ul>
               </div>
            </div>
            <Footer />
         </div>
      </div>
   )
}

export default App
