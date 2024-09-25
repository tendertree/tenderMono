/*
 * to avoid konvas confilct it need to be loaded by dynamic
 */
import React from 'react';
import dynamic from 'next/dynamic';



const NoSSRComponent = dynamic(
  () => import('../write/CanvasTypeing') as unknown as Promise<{ default: React.ComponentType<{}> }>,
  { ssr: false }
);

export default function NextClientLoader() {
  return (
    <>
      <NoSSRComponent />
    </>
  );
}


// export default function NextClientLoader() {
//   const NoSSRComponent = dynamic(() => import("../write/CanvasTypeing"), {
//     ssr: false,
//   });
//
//   return (
//     <>
//       <NoSSRComponent />
//     </>
//   );
// }
