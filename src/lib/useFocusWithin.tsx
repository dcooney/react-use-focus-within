import React, {useEffect, useState} from 'react'

/**
 * Detect current DOM focus within a given element.
 */
export default function useFocusWithin(ref: React.RefObject<any>) {
   const [isFocused, setIsFocused] = useState<boolean | undefined>(false)

   /**
    * Check if an element has focus.
    */
   function hasFocusWithin(element: HTMLElement): boolean {
      if (!element || !document) return false
      return element?.contains(document.activeElement)
   }

   useEffect(() => {
      /**
       * Focus handler.
       */
      function handler() {
         if (!ref) return false
         setIsFocused(hasFocusWithin(ref?.current))
      }

      // Bind focusin event listener.
      document.addEventListener('focusin', handler, false)
      return () => {
         // Dispose of event listener on unmount.
         document.removeEventListener('focusin', handler, false)
      }
   }, [ref, setIsFocused])

   return isFocused
}
