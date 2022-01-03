const About = () => {
    return (
        <div>
            <h1>À propos de nous</h1>
        </div>
    )
}

export async function getStaticProps(context){
    return {
        props: {
            title: "À propos"
        }
    }
}

export default About