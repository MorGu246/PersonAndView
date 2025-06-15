import GetUrl from './getUrl';

export default function Img(props1)
{
    return(
        <>
        <img style={{width:'150px',height:'auto'}}  src={GetUrl(props1.fileName)} alt=""></img>
        </>
    );
}