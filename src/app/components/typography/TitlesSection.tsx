import React from 'react';
import HeadingTitleMd from './HeadingTitleMd';
type TitlesSectionProps = {
    title:string;
    subtitle:string;
};

const TitlesSection:React.FC<TitlesSectionProps> = ({title,subtitle}) => {
    
    return <div className=' text-black_100 '>
        
        <h1 className='font-light bg-gradient-text bg-clip-text text-transparent leading-[80px] md:text-[80px] text-5xl '>{title}</h1>

        <HeadingTitleMd title={subtitle}/>
        
    </div>
}
export default TitlesSection;