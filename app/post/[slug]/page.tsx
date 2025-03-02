export async function generateStaticParams() {
    const films = await fetch('https://swapi.dev/api/films').then((res) => res.json());

    return films.results.map((film) => ({
        slug: film.title.replace(/\s/g, '-'),
    }));
}


export default function Post({ params }) {
    return (
        <div>
            <h1>Post with id {JSON.stringify(params)}</h1>
        </div>
    )
}