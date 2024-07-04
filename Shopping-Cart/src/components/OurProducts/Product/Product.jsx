import styles from './product.module.css'
// import iphone14 from '../../../../public/apple-2024-2-removebg-preview.jpg'
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '270px',
    color: '#fff',
    textAlign: 'center',
    background: '#006ba1',

};
export const Product = () => (
    <>
        <Carousel arrows infinite={false} style={{
            border: '1px solid #f5f5f5',
        }}>
            <article>
                <div style={contentStyle}>
                    <div className={styles.img__wrapper}>
                        <img src="https://fdn.gsmarena.com/imgroot/static/headers/makers/apple-2024-2.jpg" alt="" className={styles.img} />
                        {/* <img src={iphone14} alt="" className={styles.img} /> */}
                    </div>
                    <p className={styles.title}>Iphone 14 Pro Max</p>
                    <p className={styles.price} >Price: <span>$</span>2000</p>
                </div>

            </article>
            <article>
                <div style={contentStyle}>
                    <h2>Technical Specifications</h2>
                    <div className={styles.info__wrapper}>
                        <p>Capacity: <span>128BG</span></p>
                        <p>Size: <span>13 inches</span></p>
                        <p>Processor: <span>1.7GHz</span></p>
                        <p>RAM: <span>4GB</span></p>
                        <p>Battery: <span>Ionic 74mAh</span></p>
                        <p>USB Type: <span>C</span></p>
                        <p>Charger Included: <span>NO</span></p>
                    </div>
                    <button>Add to cart</button>
                </div>
            </article>
        </Carousel>
        <br />
    </>
)