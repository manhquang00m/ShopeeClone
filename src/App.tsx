import useRouteElements from './hook/common/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <>{routeElements}</>
}

export default App
