import React from 'react'
import LandingPage from '../pages/LandingPage'
const IndexRoutes = [
//     {
//     path: "/",
//     element: FormLayout,
//     subRoutes: [
//         { path: "create/:id", element: FormCreate, exact: true },
//         { path: "edit/:id", element: FormCreate, exact: true },

//         { path: "view/:id", element: FormView, exact: true },

//         {
//             path: "table/:id", element: Table, exact: true
//         },
//         {
//             path: "list", element: FormList, exact: true
//         }
//     ]
// },
{
    path: "/",
    element: LandingPage,
    exact:true
},
{ path: "*", element: () => <h1>Not found</h1> }
]
export default IndexRoutes