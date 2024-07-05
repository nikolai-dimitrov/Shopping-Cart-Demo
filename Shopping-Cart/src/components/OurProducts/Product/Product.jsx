import styles from './product.module.css'
import { Carousel } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const contentStyle = {
    margin: 0,
    height: '270px',
    color: '#fff',
    textAlign: 'center',
    background: '#006ba1',

};
export const Product = ({
    _id,
    item,
    display,
    processor,
    ram,
    imageUrl,
    capacity,
    battery,
    usbType,
    price,
    chargerIncluded
}) => (
    <>
        <Carousel arrows infinite={false} style={{
            border: '1px solid #f5f5f5',
        }}>
            <article>
                <div style={contentStyle}>
                    <div className={styles.img__wrapper}>
                        <img src={imageUrl} alt="" className={styles.img} />
                    </div>
                    <p className={styles.title}>{item}</p>
                    <p className={styles.price} >Price: <span>$</span>{price}</p>
                </div>

            </article>
            <article>
                <div style={contentStyle}>
                    <h2>Technical Specifications</h2>
                    <div className={styles.info__wrapper}>
                        <p>Capacity: <span>{capacity}BG</span></p>
                        <p>Size: <span>{display} inches</span></p>
                        <p>Processor: <span>{processor}GHz</span></p>
                        <p>RAM: <span>{ram}GB</span></p>
                        <p>Battery: <span>{battery}mAh</span></p>
                        <p>USB Type: <span>{usbType}</span></p>
                        <p>Charger Included: <span>{chargerIncluded}</span></p>
                    </div>
                    <button>Add to cart <ShoppingCartOutlined /></button>
                </div>
            </article>
        </Carousel>
        <br />
    </>
)