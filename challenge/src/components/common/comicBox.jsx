import { Flex } from "./flex";


export const ComicBox = ({image, title})=>{

    function parseText(input) {
        const regex = /(.*)\((\d{4})\)(.*)/;
        const match = input.match(regex);
    
        if (match) {
            const texto = match[1].trim() +" "+match[3].trim();
            const año = parseInt(match[2], 10);
            return { year: año, text: texto };
        } else {
            return null;
        }
    }

    const data = parseText(title);

    return(
        <Flex className="comic-box" direction="column" >
            <img  className="comic-image" src={image} alt="image" />
            <Flex className="description-section" direction="column">
                <p className="title">{data.text}</p>
                <p className="year">{data.year}</p>
            </Flex>
        </Flex>
    );
}