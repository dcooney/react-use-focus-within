import React from 'react'

export default function Footer() {
   return (
      <footer className="pt-5 pb-20 border-t text-center">
         <p className="m-0 p-0 pt-2 text-sm flex w-full gap-2 justify-center">
            <span>View Source:</span>
            <a href="https://www.npmjs.com/package/react-use-focus-within">
               NPM
            </a>{' '}
            <span>/</span>
            <a href="https://github.com/dcooney/react-use-focus-within">
               Github
            </a>
         </p>
      </footer>
   )
}
