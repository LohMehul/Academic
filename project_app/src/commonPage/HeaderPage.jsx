// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBContainer,
//   MDBIcon,
//   MDBCollapse,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showBasic, setShowBasic] = useState(false);

//   return (
//     <header>
//       <MDBNavbar expand='lg' light bgColor='white'>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             onClick={() => setShowBasic(!showBasic)}
//             aria-controls='navbarExample01'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//           >
//             <MDBIcon fas icon='bars' />
//           </MDBNavbarToggler>
//           <MDBCollapse navbar show={showBasic}>
//             <MDBNavbarNav right className='mb-2 mb-lg-0'>
//               <MDBNavbarItem active>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>

//       <div
//         className='p-5 text-center bg-image'
//         style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '500px' }}
//       >
//         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
//           <div className='d-flex justify-content-center align-items-center h-100'>
//             <div className='text-white'>
//               <h1 className='mb-3'>Heading</h1>
//               <h4 className='mb-3'>Subheading</h4>
//               <MDBBtn tag="a" outline size="lg">
//                 Call to action
//               </MDBBtn>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  // MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  // MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='md' light bgColor='light'>
      <MDBContainer fluid>
        <Link className='nav-link' to='/'>Navbar</Link>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            
            <MDBNavbarItem>
              <Link className='nav-link' to='/'>Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/project'>Project</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/practice'>Practice</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}