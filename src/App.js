import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import { PATH } from './constants/path';
import { DetailPage, HomePage, LoginPage, NewBookPage } from './pages/index';

const router = createBrowserRouter([
  {
    path: PATH.login,
    element: <LoginPage/>
  },
  {
    path: PATH.register,
    element: <LoginPage/>
  },
  {
    path: PATH.detail,
    element: <DetailPage/>
  },
  {
    path: PATH.newbook,
    element: <NewBookPage/>
  },
  {
    path: PATH.home,
    element: <HomePage/>
  },
  {
    path: '/*',
    element: <Navigate to={PATH.home}/>
  }
])

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
