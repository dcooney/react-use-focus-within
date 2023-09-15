import React, {useRef} from 'react'
import useFocusWithin from './lib/useFocusWithin'

function App() {
   const ref = useRef() as React.RefObject<any>
   const isFocused = useFocusWithin(ref)

   return (
      <div className="container py-5">
         <h1>UseFocusWithin</h1>
         <p>
            Aenean lacinia <a href="/">bibendum nulla</a> sed consectetur.
            Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia
            bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.
            Donec ullamcorper nulla non metus auctor fringilla.
         </p>
         <p>
            <code>Focused: {isFocused ? 'true' : 'false'}</code>
         </p>
         <div className="border rounded my-5 p-5" ref={ref}>
            <ul>
               <li>
                  <a href="/">One</a>
               </li>
               <li>
                  <a href="/">Two</a>
               </li>
               <li>
                  <a href="/">Three</a>
               </li>
               <li>
                  <a href="/">Four</a>
               </li>
            </ul>
         </div>
         <p>
            Aenean lacinia <a href="/">bibendum nulla</a> sed consectetur.
            Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia
            bibendum nulla <a href="/">bibendum nulla</a> sed consectetur.
            Curabitur blandit tempus porttitor. Donec ullamcorper nulla non
            metus auctor fringilla.
         </p>
      </div>
   )
}

export default App
