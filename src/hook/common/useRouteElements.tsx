import { useRoutes } from 'react-router-dom'
import RegisterLayout from 'src/layouts/RegisterLayout/RegisterLayout'
import Login from 'src/pages/Login/Login'
import ProductList from 'src/pages/ProductList/ProductList'
import Register from 'src/pages/Register/Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
