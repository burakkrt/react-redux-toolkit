import {Helmet, HelmetProvider} from "react-helmet-async";

const helmetContext = {
    title: "React Rexdux Toolkit",
    description: "A simple app that uses Redux Toolkit to manage states in React and Ant Design for design.",
    keywords: "React, Redux, Redux Toolkit, Vite, Ant Design",
    author: "https://github.com/burakkrt"
}


// eslint-disable-next-line react/prop-types
export default function CustomHelmetProvider({children}) {

    return (
        <HelmetProvider context={helmetContext}>
            {children}
        </HelmetProvider>
    );
}

// eslint-disable-next-line react/prop-types
export const CustomHelmet = ({title}) => {

    return (
        <Helmet>
            <title>{title || helmetContext.title}</title>
            <meta name="description" content={helmetContext.description}/>
            <meta name="keywords" content={helmetContext.keywords}/>
            <meta name="author" content={helmetContext.author}/>
        </Helmet>
    )
}