import './Card.css'

export const config = { amp: true }

export default function AmpCard(props) {
    let url = props.img_link.path;
    let ext = props.img_link.extension;
    let img_url = url+"."+ext;

  return (
    <div className='Card-Container'>
        <div className='card-image'>
            <amp-img alt="hero-img" src= {img_url} height="12.5rem" width="10rem" layout="responsive"></amp-img>
        </div>
        <div className='card-divider'/>
        <div className='Card-detail'>
            <div className='Card-name'>
                <p>{props.hName}</p>
            </div>
            <div className='Card-desc'>
            </div>
        </div>
    </div>
  )
}