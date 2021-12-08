import { Routes, Route } from 'react-router'
import Layout from './components/Layout'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<h1>Hello, World!</h1>} />
				<Route path="*" element={<h1>Тут ничего нет</h1>} />
			</Route>
		</Routes>
	)
}

export default App
