import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GO FUTURE SCHOOL</title>
        <link rel="stylesheet" href="/styles.css" />
        <meta
					name="description"
					content="GO FUTURE SCHOOL
          Domain for sale
          Offer a price
          THE BEST INNOVATION SCHOOL"

				/>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
