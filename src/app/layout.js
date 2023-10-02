import "./global.css";
import CheckLoginToken from "./components/CheckLoginToken";
import { Providers } from "./redux/providers";

export const metadata = {
	title: 'Chatsapp',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
			</head>
			<body>
				<Providers>
					<CheckLoginToken />
					{children}
				</Providers>
			</body>
		</html>
	)
}
